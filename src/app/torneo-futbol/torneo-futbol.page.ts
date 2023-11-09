import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClToreno_futbol } from './model/ClTorneo-futbol';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { TorneoFutbolService } from './torneo-futbol.service';
import { IonCheckbox, IonInput, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-torneo-futbol',
  templateUrl: './torneo-futbol.page.html',
  styleUrls: ['./torneo-futbol.page.scss'],
})
export class TorneoFutbolPage {

}
