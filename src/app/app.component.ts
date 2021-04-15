import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { Team } from './model/team';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EB2021 App';
  counter = 100;

  constructor(
    private baseService: BaseService<Team>,
    private afAuth: AngularFireAuth,
  ) {
    let keyTeam: Team = new Team();
  }

}
