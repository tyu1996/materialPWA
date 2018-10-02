import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private weatherdata: HttpClient) { }

  getForecast() {
    return this.weatherdata.get('http://api.openweathermap.org/data/2.5/weather?q=bintulu&units=metric&appid=<your_app_id>');
  }
}
