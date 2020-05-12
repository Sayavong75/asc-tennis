import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Player
  // getPlayerList(): Observable<Player[]> {
  //   return this.httpClient.get<Player[]>('http://localhost:8080/api/players');
  // }


  fetchPosts(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:8080/api/players').pipe(
      map(data => data.map(o => this.toPlayer(o) ))
    );
  }

  private toPlayer(obj: any): Player {
    console.log('objet'+ obj);
    const trainingGroup = obj.trainingGroup;
    return {
      id: obj.id,
      lastName: obj.lastName,
      firstName: obj.firstName,
      login: obj.login,
      trainingGroup: trainingGroup.label,
      statusIsActive: obj.statusIsActive
    };
  }
}
