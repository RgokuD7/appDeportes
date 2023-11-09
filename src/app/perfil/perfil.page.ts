import { Component, OnInit } from '@angular/core';
import { Clusuario } from '../usuario/model/ClUsuario';
import { UsuarioService } from '../usuario/usuario.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  constructor(private router: Router, private restApi: UsuarioService) {}

  usuario = new Clusuario();
  ionViewDidEnter() {
    this.usuario = this.restApi.getUserLogged();
  }

  logOutClick(){
    this.restApi.deleteLoggedUser();
    this.router.navigate(['/home']);
  }
}
