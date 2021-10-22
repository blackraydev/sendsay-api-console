import { IError } from '../models/IError';

export const stringifyError = (err: IError) => {
  return `{id: "${err.id}", explain: "${err.explain}"}`;
};
