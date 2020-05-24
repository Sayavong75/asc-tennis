import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {Ranking} from '../model/ranking';
import {TrainingGroup} from '../model/trainingGroup';
import {Series} from '../model/series';
import {Coach} from '../model/coach';
import {Club} from '../model/club';
import {TrainingDay} from '../model/trainingDay';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  // TODO : créer constante pour localhost 8080 (pour non répétition)
  // PLAYER
  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(environment.apiUrl + 'players');
  }

  addPlayer(player) {
    return this.httpClient.post(environment.apiUrl + `players`, player);
  }

  updatePlayer(player, playerId) {
    return this.httpClient.put(environment.apiUrl + `players/${playerId}`, player);
  }

  // RANKING
  getRankingList(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(environment.apiUrl + 'rankings');
  }

  addRanking(ranking) {
    return this.httpClient.post(environment.apiUrl + `rankings`, ranking);
  }

  updateRanking(ranking, rankingId) {
    return this.httpClient.put(environment.apiUrl + `rankings/${rankingId}`, ranking);
  }

  deleteRanking(rankingId): Observable<Ranking> {
    return this.httpClient.delete<Ranking>(environment.apiUrl + `rankings/${rankingId}`);
  }

  // SERIES
  getSeriesList(): Observable<Series[]> {
    return this.httpClient.get<Series[]>(environment.apiUrl + 'series');
  }

  // TRAINING GROUP
  getTrainingGroupList(): Observable<TrainingGroup[]> {
    return this.httpClient.get<TrainingGroup[]>(environment.apiUrl + 'training-groups');
  }

  addTrainingGroup(trainingGroup) {
    return this.httpClient.post(environment.apiUrl + `training-groups`, trainingGroup);
  }

  updateTrainingGroup(trainingGroup, trainingGroupId) {
    return this.httpClient.put(environment.apiUrl + `training-groups/${trainingGroupId}`, trainingGroup);
  }

  deleteTrainingGroup(trainingGroupId): Observable<TrainingGroup> {
    return this.httpClient.delete<TrainingGroup>(environment.apiUrl + `training-groups/${trainingGroupId}`);
  }

  // COACH
  getCoachList(): Observable<Coach[]> {
    return this.httpClient.get<Coach[]>(environment.apiUrl + 'coaches');
  }

  addCoach(coach) {
    return this.httpClient.post(environment.apiUrl + `coaches`, coach);
  }

  updateCoach(coach, coachId) {
    return this.httpClient.put(environment.apiUrl + `coaches/${coachId}`, coach);
  }

  // CLUB
  getClubList(): Observable<Club[]> {
    return this.httpClient.get<Club[]>(environment.apiUrl + 'clubs');
  }

  addClub(club) {
    return this.httpClient.post(environment.apiUrl + `clubs`, club);
  }

  updateClub(club, clubId) {
    return this.httpClient.put(environment.apiUrl + `clubs/${clubId}`, club);
  }

  // TRAINING DAY
  getTrainingDayList(): Observable<TrainingDay[]> {
    return this.httpClient.get<TrainingDay[]>(environment.apiUrl + 'training-days');
  }

  addTrainingDay(trainingDay) {
    return this.httpClient.post(environment.apiUrl + `training-days`, trainingDay);
  }

  updateTrainingDay(trainingDay, trainingDayId) {
    return this.httpClient.put(environment.apiUrl + `training-days/${trainingDayId}`, trainingDay);
  }

  deleteTrainingDay(trainingDayId): Observable<TrainingDay> {
    return this.httpClient.delete<TrainingDay>(environment.apiUrl + `training-days/${trainingDayId}`);
  }

  // USER
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUrl + 'users');
  }

  // tslint:disable-next-line:no-shadowed-variable
  addUser(User) {
    return this.httpClient.post(environment.apiUrl + `users/sign-up`, User);
  }

  // ROLE
  getRoleList() {
    return ['NO_ROLE', 'ROLE_ADMIN', 'ROLE_READER'];
  }

}
