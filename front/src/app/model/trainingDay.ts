import {Club} from './club';
import {TrainingGroup} from './trainingGroup';

export class TrainingDay {
  id: number;
  day: string;
  startTime: string;
  maxNumberPlayers: number;
  club: Club;
  trainingGroup: TrainingGroup;
  statusIsActive: boolean;
}
