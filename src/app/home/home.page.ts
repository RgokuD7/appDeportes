import { Component } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private restApi: UsuarioService, private router: Router) {}

  ionViewWillEnter() {
    const isLogged = this.restApi.checkUserLogged();
    if (isLogged) {
      this.router.navigate(['']);
    }
  }
}
