import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Team } from '../model/team';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  getAll(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
