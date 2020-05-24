import {Ranking} from './ranking';
import {TrainingGroup} from './trainingGroup';
import {User} from './user';

export class Player {
  id: number;
  lastName: string;
  firstName: string;
  email1: string;
  email2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  trainingCount: number;
  ranking: Ranking;
  trainingGroup: TrainingGroup;
  appUser: User;
  generalAlertOn: boolean;
  playerAlertOn: boolean;
  statusIsActive: boolean;
}
