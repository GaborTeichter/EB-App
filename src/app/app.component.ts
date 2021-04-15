import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eb-app';
  counter = 100;

  constructor() {
    setInterval( () => {
      this.counter--;
    }, 1000); 
  }
}
