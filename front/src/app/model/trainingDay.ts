import {Club} from './club';

export class TrainingDay {
  id: number;
  day: string;
  startTime: string;
  maxNumberPlayers: number;
  club: Club;
  statusIsActive: boolean;
}
