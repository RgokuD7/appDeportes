import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker  } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('mapa') mapRef: ElementRef;
  map: GoogleMap;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    const position = await Geolocation.getCurrentPosition();
    this.map = await GoogleMap.create({
      id: 'mapa',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 19,
      },
    });

    await this.map.enableCurrentLocation(true);


  }
}
