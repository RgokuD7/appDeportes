import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-nuevo-camp',
  templateUrl: './nuevo-camp.page.html',
  styleUrls: ['./nuevo-camp.page.scss'],
})
export class NuevoCampPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  futbolClick(){
    this.navCtrl.navigateForward('torneo-futbol/crear-torneo-futbol');
  }
}
