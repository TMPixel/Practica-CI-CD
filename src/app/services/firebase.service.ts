import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail } from '@firebase/auth';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  collectionData,
  query,
} from '@angular/fire/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { 
  getStorage,
  uploadString,
  getDownloadURL,
  deleteObject,
  ref
 } from 'firebase/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth)
  firestore = inject(AngularFirestore)
  utils = inject(UtilsService)
  storage = inject(AngularFireStorage)

  //Authentication
  //acceso
  signIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  //registro
  signUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //actualizar perfil de usuario
  updateProfile(displayName:string){
    return updateProfile(getAuth().currentUser, {displayName})
  }
  
  //Recuperar contraseña
  sendRecoveryEmail(email:string){
    return sendPasswordResetEmail(getAuth(), email)
  }

  //Base de datos
  setDocument(path:string, data:any){
    return setDoc(doc(getFirestore(), path),data)
  }

  // async getDocument(path:string)
  // {
  //   return (await getDoc(doc(getFirestore(),path))).data()
  // }

    //Cerrar Sesion
  signOut()
  {
    getAuth().signOut()
    localStorage.removeItem('user')
    this.utils.routerLink('/auth')
  }

  async getUserInfo(uid: string) {
    return this.getDocument(`users/${uid}`);
  }
  //obtener documento de una coleccion
  getCollectionData(path:string, collectionQuery?:any){
    const ref = collection(getFirestore(), path)
    return collectionData(ref, ...collectionQuery), {idField:'id'}
  }
  
  //actualizar documento de una coleccion
  updateDocument(path:string, data:any){
    return updateDoc(doc(getFirestore(), path), data)
    
  }
  //eliminar documento de una coleccion
  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(), path))).data()
  }
  
  //agregar documento de una coleccion
  addDocument(path:string, data:any){
    return addDoc(collection(getFirestore(), path), data)
  }

  //ALMACENAMIENTO
  //Subir imagen
  async uploadImage(path:string, data_url:string){
    //guardar la img en el storage
    return uploadString(ref(getStorage(),path), data_url, 'data_url').then(
      //devuelve la url
      () => {return getDownloadURL(ref(getStorage(),path))}
    )
  }
  //Obtener la ruta de la imagen a través de la url
  async getFilePath(url:string){
    return ref(getStorage(), url).fullPath
  }

  //eliminar el archivo 
  deleteFile(path: string){
    return deleteObject(ref(getStorage(), path))
  }
}

