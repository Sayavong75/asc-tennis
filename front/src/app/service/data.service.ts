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

  // Player
  // getPlayerList(): Observable<Player[]> {
  //   return this.httpClient.get<Player[]>('http://localhost:8080/api/players');
  // }

  // Player
  fetchPosts(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:8080/api/players').pipe(
      map(data => data.map(o => this.toPlayer(o) ))
    );
  }

  private toPlayer(obj: any): Player {
    console.log('objet'+ obj);
    const trainingGroup = obj.trainingGroup;
    const ranking = obj.ranking;
    return {
      id: obj.id,
      lastName: obj.lastName,
      firstName: obj.firstName,
      login: obj.login,
      password: obj.password,
      email1: obj.email1,
      email2: obj.email2,
      phoneNumber1: obj.phoneNumber1,
      phoneNumber2: obj.phoneNumber2,
      trainingCount: obj.trainingCount,
      ranking: ranking.label,
      trainingGroup: trainingGroup.label,
      generalAlertOn: obj.generalAlertOn,
      playerAlertOn: obj.playerAlertOn,
      statusIsActive: obj.statusIsActive
    };
  }

  // Ranking
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

  // Series
  getSeriesList(): Observable<Series[]> {
    return this.httpClient.get<Series[]>('http://localhost:8080/api/series');
  }

  // Training Group
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

  // Coach
  getCoachList(): Observable<Coach[]> {
    return this.httpClient.get<Coach[]>('http://localhost:8080/api/coaches');
  }

}
