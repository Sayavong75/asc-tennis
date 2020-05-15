import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {Ranking} from '../model/ranking';
import {TrainingGroup} from '../model/trainingGroup';
import {Series} from '../model/series';
import {map} from 'rxjs/operators';
import {Coach} from '../model/coach';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // PLAYER
  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:8080/api/players');
  }

  addPlayer(player) {
    return this.httpClient.post(`http://localhost:8080/api/players`, player);
  }

  updatePlayer(player, playerId) {
    return this.httpClient.put(`http://localhost:8080/api/players/${playerId}`, player);
  }

  // RANKING
  getRankingList(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>('http://localhost:8080/api/rankings');
  }

  addRanking(ranking) {
    return this.httpClient.post(`http://localhost:8080/api/rankings`, ranking);
  }

  updateRanking(ranking, rankingId) {
    return this.httpClient.put(`http://localhost:8080/api/rankings/${rankingId}`, ranking);
  }

  deleteRanking(rankingId): Observable<Ranking> {
    return this.httpClient.delete<Ranking>(`http://localhost:8080/api/rankings/${rankingId}`);
  }

  // SERIES
  getSeriesList(): Observable<Series[]> {
    return this.httpClient.get<Series[]>('http://localhost:8080/api/series');
  }

  // TRAINING GROUP
  getTrainingGroupList(): Observable<TrainingGroup[]> {
    return this.httpClient.get<TrainingGroup[]>('http://localhost:8080/api/training-groups');
  }

  addTrainingGroup(trainingGroup) {
    return this.httpClient.post(`http://localhost:8080/api/training-groups`, trainingGroup);
  }

  updateTrainingGroup(trainingGroup, trainingGroupId) {
    return this.httpClient.put(`http://localhost:8080/api/training-groups/${trainingGroupId}`, trainingGroup);
  }

  deleteTrainingGroup(trainingGroupId): Observable<TrainingGroup> {
    return this.httpClient.delete<TrainingGroup>(`http://localhost:8080/api/training-groups/${trainingGroupId}`);
  }

  // COACH
  getCoachList(): Observable<Coach[]> {
    return this.httpClient.get<Coach[]>('http://localhost:8080/api/coaches');
  }

  addCoach(coach) {
    return this.httpClient.post(`http://localhost:8080/api/coaches`, coach);
  }

  updateCoach(coach, coachId) {
    return this.httpClient.put(`http://localhost:8080/api/coaches/${coachId}`, coach);
  }

}
