import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

const apiKey = 'AIzaSyBU5K4FN4QJeTy9pq3J-CizGiweJvjtKzc';

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

  newMap: any;

  ionViewDidEnter() {
    this.createMap();
  }


  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
