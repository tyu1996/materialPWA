import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
