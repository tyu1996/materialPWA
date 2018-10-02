import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      "app_id": "YOUR_APP_ID",
      "app_code": "YOUR_ADD_CODE",
    });
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 16,
        center: { lat: 3.2, lng: 113.05 }
      },
    );

    //Making map more attractive: using fleet style
    let mapTileService = this.platform.getMapTileService({'type':'base'});
    let fleetStyle = mapTileService.createTileLayer(
      'maptile',
      'normal.day',
      256,
      'png8',
      { 'style': 'fleet' }
    );
    map.setBaseLayer(fleetStyle);

    //Map events(interactive)
    let mapEvents = new H.mapevents.MapEvents(map);
    let behavior = new H.mapevents.Behavior(mapEvents);

  }

}
