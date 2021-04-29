import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from './team.service';
import { StadiumService } from './stadium.service';
import { GroupService } from './group.service';
import { KnockoutService } from './knockout.service';
import { BaseService } from './base.service';
import { Knockout } from '../model/knockout';
import { FirebaseFirestore } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class ImporterService {
  jsonURL: string = "eb-app\src\app\data\data.json";
  ebData: any = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private stadiumService: StadiumService,
    private groupService: GroupService,
    private knockoutService: KnockoutService
  ) { }

  getJsonData() {
    this.http.get(this.jsonURL).forEach(
      jsonData => {
        console.log(jsonData);
        this.ebData = jsonData;
        this.processData();
      }
    );
  }

  processData() {
    this.pushAll(this.teamService, 'teams', this.ebData.teams);
    this.pushAll(this.stadiumService, 'stadiums', this.ebData.stadiums);
    
    let knocks: Knockout[] = [];
    for (let k in this.ebData.knockout) {
      this.ebData.knockout[k].id = k;
      knocks.push(this.ebData.knockout[k]);
    }
    this.pushAll(this.knockoutService, 'knockout', knocks);
  }



  pushAll(service, collectionName, data) {
    service.getAll(collectionName).subscribe(
      list => {
        let db: FirebaseFirestore = service.itemsCollection.ref.firestore;
        let batch = db.batch();

        for (let k in data) {
          let id = data[k].id.toFixed ? data[k].id.toFixed() : data[k].id;
          let ref = db.collection(collectionName).doc(id);
          batch.set(ref, data[k]);
        }

        batch.commit().then( () => {
          console.log(`${collectionName} committed`);
        });
      }
    );
  }

}
