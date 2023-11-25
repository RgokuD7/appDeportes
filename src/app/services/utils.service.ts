import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  




  // guardar elemento en local storage

  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  // obtener elemento localStorage

  getFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key));
  }
}
