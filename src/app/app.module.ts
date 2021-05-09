import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { MatchListComponent } from './match-list/match-list.component';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  declarations: [ AppComponent, MatchListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
