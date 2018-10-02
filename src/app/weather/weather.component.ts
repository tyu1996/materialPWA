import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather$ : Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getForecast().subscribe(
      data => this.weather$ = data
    );
  }

  tiles = [
    { cols: 1, rows: 2 },
    { cols: 1, rows: 2 },
    { cols: 2, rows: 2 },
  ]

}