import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.page.html',
  styleUrls: ['./crear-equipo.page.scss'],
})
export class CrearEquipoPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  photoSvc = inject(PhotoService);

  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('../../../assets/icon/shield.svg', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    location: new FormControl('', [Validators.required]),
  });

  async selectClubImage() {
    const dataUrl = (await this.photoSvc.selectImage()).dataUrl;
    this.form.controls.image.setValue(dataUrl);
  }
}
