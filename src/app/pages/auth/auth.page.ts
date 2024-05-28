import { UtilsService } from './../../services/utils.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
form = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required]),
})
  constructor() { }
  firebase = inject(FirebaseService)
  utils = inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
    const loading = await this.utils.loading()
    await loading.present()
    this.firebase.signIn(this.form.value as User).then(res=>{
      this.utils.saveInLocalStorage('user', {uid: res.user.uid, name:res.user.displayName, email:res.user.email})
      console.log(res)

      //this.utils.routerLink('main/home')
    }).catch(err=>{
      this.utils.showToast({
        message:"Datos incorrectos",
        color:'danger',
        position:'middle',
        duration:3000,
        icon:'alert-circle-outline'
      })
    }).finally(()=>{
      loading.dismiss()
    })
  }
}
