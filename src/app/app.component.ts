  
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from './service/base.service';
import { Team } from './model/team';
import { AngularFireAuth } from 'angularfire2/auth';
import { isNull } from 'util';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EURO2021 App';
  user: any = {};
  teamKeys: string[] = [];
  teams: Team[] = [];
  oneTeam: any;
  newRow: any = {};
  items: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private baseService: BaseService<Team>,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
  ) {
    let keyTeam: Team = new Team();
    this.teamKeys = Object.keys( keyTeam );
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit() {
    this.afAuth.user.subscribe(
      user => { 
        this.user = user;
        if (!isNull(user)) {
          // this.getAllData();
        }
      },
      err => console.log(err)
    );
    // this.importerService.getJsonData();
  }

  getAllData() {
    this.baseService.getAll('teams').subscribe(
      teams => this.teams = teams,
      err => console.error(err)
    );
  }

  getTeam(teamID) {
    this.baseService.getOne(teamID).forEach(
      team => this.oneTeam = team
    );
  }

  updateRow(team: Team): void {
    this.baseService.update(team.id, team);
  }

  addRow(team: Team): void {
    this.baseService.create(team);
  }

  deleteRow(id: string): void {
    this.baseService.delete(id);
  }

}
