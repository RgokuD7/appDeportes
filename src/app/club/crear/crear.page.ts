import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Clubform = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    location: new FormControl('', [Validators.required]),
    categories: new FormArray([
      new FormGroup({
        categoryName: new FormControl('', Validators.required),
        minAge: new FormControl('', Validators.required),
        maxAge: new FormControl('', Validators.required)
      })
    ])
  })

  get categories() {
    return this.Clubform.get('categories') as FormArray;
  }

  addCategory() {
    this.categories.push(new FormGroup({
      categoryName: new FormControl('', Validators.required),
      minAge: new FormControl('', Validators.required),
      maxAge: new FormControl('', Validators.required)
    }));
  }

  removeCategory(index: number) {
    this.categories.removeAt(index);
  }
}
