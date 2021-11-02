import { makeAutoObservable } from 'mobx';
import { IRequest } from '../models/IRequest';
import api from '../helpers/sendsay';
import { StatusTypes } from '../constants/statusTypes';
import { formatJson } from '../helpers/formatJson';
import { persist } from 'mobx-persist';

class RequestStore {
  @persist("object") request: IRequest = {} as IRequest;
  @persist("list") requestsList: IRequest[] = [] as IRequest[];
  @persist isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = () => {
    this.isLoading = true;
  }

  unsetLoading = () => {
    this.isLoading = false;
  }

  clearRequest = () => {
    const newRequest: IRequest = {
      id: 0,
      query: '',
      jsonInvalid: false,
      response: '',
      status: StatusTypes.PENDING
    };

    this.request = newRequest;
  }

  removeRequest = (id: number) => {
    this.requestsList = this.requestsList.filter(req => req.id !== id);
  }

  removeAllRequests = () => {
    this.requestsList = [] as IRequest[];
  }

  setJsonInvalid = () => {
    this.request.jsonInvalid = true;
  }

  setRequest = (request: IRequest) => {
    const newRequest: IRequest = {
      ...this.request,
      query: request.query,
      jsonInvalid: false
    };

    this.request = newRequest;
  }

  setResponse = (request: IRequest) => {
    const newId = this.requestsList[0] && this.requestsList[0].id?.toString() ? this.requestsList[0].id + 1 : 0;
    
    const newRequest: IRequest = {
      id: newId,
      query: request.query,
      response: request.response,
      status: request.status,
      jsonInvalid: false,
    };

    const targetRequest = this.requestsList.find(
      (req) => formatJson(req.query) === formatJson(newRequest.query) && req.status === newRequest.status
    );

    let newRequestsList;

    if (targetRequest) {
      newRequestsList = this.requestsList.filter((req, index) => {
        if (index < 20 && req.id !== targetRequest.id) {
          return req;
        }
      });
      newRequestsList = [newRequest, ...newRequestsList]
        .reverse()
        .map((req, index) => {
          req.id = index;
          return req;
        })
        .reverse();
    } else {
      newRequestsList = [newRequest, ...this.requestsList].filter((_, index) => index < 20);
    }

    this.request = newRequest;
    this.requestsList = newRequestsList;
  }

  sendRequestAsync = async (query: string) => {
    const request: IRequest = { query };

    try {
      this.setLoading();

      await api.sendsay.request(JSON.parse(query)).then((res: string) => (request.response = res));

      request.status = StatusTypes.SUCCESS;
    } catch (e: any) {
      request.response = e;
      request.status = StatusTypes.FAILED;
    } finally {
      this.setResponse(request);
      this.unsetLoading();
    }
  }
}

export const requestStore = new RequestStore();
