import { IUsers } from '../../../modules/modules';

export interface IUserData {
  id: number;
  name: string;
  email: string;
}

export interface IUserState {
  data: IUsers[];
  status: string;
}
