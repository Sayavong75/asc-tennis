import {Ranking} from './ranking';
import {TrainingGroup} from './trainingGroup';

export class Player {
  id: number;
  lastName: string;
  firstName: string;
  login: string;
  password: string;
  email1: string;
  email2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  trainingCount: number;
  ranking: Ranking;
  trainingGroup: TrainingGroup;
  generalAlertOn: boolean;
  playerAlertOn: boolean;
  statusIsActive: boolean;
}
