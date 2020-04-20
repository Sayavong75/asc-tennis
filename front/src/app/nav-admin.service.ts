import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavAdminService {

  invokeAdminFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  addAdminMenu() {
    this.invokeAdminFunction.emit();
  }
}
