import { IUsers } from '../../../modules/modules';

export interface IFetchParams {
  offset?: number;
}

export interface IUsersState {
  data: IUsers[];
  status: string;
}
