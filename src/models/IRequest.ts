import { StatusType } from '../types/StatusType';

export interface IRequest {
  query: string;
  id?: number;
  jsonInvalid?: boolean;
  response?: string;
  status?: StatusType;
}
