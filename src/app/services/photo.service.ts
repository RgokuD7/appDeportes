import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async takePicture(promptLabelHeader: string){
   return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Seleccione una Foto',
      promptLabelPicture: 'Toma una Foto'
    });
  };

  async selectImage(){
    return await Camera.getPhoto({
       quality: 90,
       allowEditing: true,
       resultType: CameraResultType.DataUrl,
       source: CameraSource.Photos,
     });
   };

}