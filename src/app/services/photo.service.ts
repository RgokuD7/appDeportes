import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    try {
      // Take a photo
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        quality: 100
      });
  
      this.photos.unshift({
        filepath: "soon...",
        webviewPath: capturedPhoto.webPath!
      });
    } catch (error) {
      console.error('camara cerrada');
    }
  }
  
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
