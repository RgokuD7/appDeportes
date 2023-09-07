import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-partidos',
  templateUrl: './menu-partidos.page.html',
  styleUrls: ['./menu-partidos.page.scss'],
})
export class MenuPartidosPage implements OnInit {

  data: any;
  constructor(private activeroute: ActivatedRoute, private router: Router){
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.["user"];
        console.log(this.data)
      }
    }
    );
  }

  user_loginString = localStorage.getItem('user_login');
  user_login = this.user_loginString ? JSON.parse(this.user_loginString) : [];

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    console.log(this.user_login);
  }

}
