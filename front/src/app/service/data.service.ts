import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {Ranking} from '../model/ranking';
import {TrainingGroup} from '../model/trainingGroup';
import {Series} from '../model/series';
import {Coach} from '../model/coach';
import {Club} from '../model/club';
import {TrainingDay} from '../model/trainingDay';

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

  // CLUB
  getClubList(): Observable<Club[]> {
    return this.httpClient.get<Club[]>('http://localhost:8080/api/clubs');
  }

  addClub(club) {
    return this.httpClient.post(`http://localhost:8080/api/clubs`, club);
  }

  updateClub(club, clubId) {
    return this.httpClient.put(`http://localhost:8080/api/clubs/${clubId}`, club);
  }

  // TRAINING DAY
  getTrainingDayList(): Observable<TrainingDay[]> {
    return this.httpClient.get<TrainingDay[]>('http://localhost:8080/api/training-days');
  }

  addTrainingDay(trainingDay) {
    return this.httpClient.post(`http://localhost:8080/api/training-days`, trainingDay);
  }

  updateTrainingDay(trainingDay, trainingDayId) {
    return this.httpClient.put(`http://localhost:8080/api/training-days/${trainingDayId}`, trainingDay);
  }

  deleteTrainingDay(trainingDayId): Observable<TrainingDay> {
    return this.httpClient.delete<TrainingDay>(`http://localhost:8080/api/training-days/${trainingDayId}`);
  }

}
