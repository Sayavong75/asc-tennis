import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Player
  getPlayerList(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:8080/api/players');
  }
}
