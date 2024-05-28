import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingController = inject(LoadingController)
  toastController = inject(ToastController)
  router = inject(Router)
  modalController = inject(ModalController)

  loading() {
    return this.loadingController.create({
      message: 'Loading...'
    })
  }

  async showToast(op?:ToastOptions){
    const toast = await this.toastController.create(op)
    toast.present()
  }

  routerLink(url:string){
    return this.router.navigateByUrl(url)
  }
  
  saveInLocalStorage(key:string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key))
  }

  //Manejo de modales
  
  async presentModal(opt: ModalOptions){
    const modal = await this.modalController.create(opt)
    await modal.present()
  }

  dismissModal(data?:any){
    return this.modalController.dismiss(data)
  }

  //manejo de la camara
  async takePicture(promptLabelHeader: string){
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPicture:'Toma una foto :3',
      promptLabelPhoto: 'Selecciona una imagen :3'
    })
  }
}

