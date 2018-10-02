import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWApps';

  constructor(private updates: SwUpdate, public router: Router) { }

  ngOnInit() {
    //Check updates for the app
    this.updates.available.subscribe(event => {
      //Auto reload webpage
      this.updates.activateUpdate().then(() => document.location.reload());
    }); 
  }

  tiles = [
    { text: "one", cols: 1, rows: 1 },
    { text: "two", cols: 1, rows: 1 },
    { text: "three", cols: 1, rows: 1 },
  ]

  iconRoutes = [
    { text: "Map", icon: "map", route: "map" },
    { text: "Weather", icon: "wb_sunny", route: "weather" },
    { text: "About", icon: "info", route: "about" },
  ]
}
