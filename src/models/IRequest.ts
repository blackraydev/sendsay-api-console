import { StatusType } from '../types/StatusType';

export interface IRequest {
  query: string;
  jsonInvalid?: boolean;
  response?: string;
  status?: StatusType;
}
