import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor() { }
  form = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
  })
  
  firebase = inject(FirebaseService)
  utils = inject(UtilsService)
  
    ngOnInit() {
    }
  
    async submit(){
      if(this.form.valid)
      {
        const loading = await this.utils.loading()
        await loading.present()
        this.firebase.sendRecoveryEmail(this.form.value.email).then( res => {

          this.utils.showToast({
            message: 'Correo enviado con éxito',
            duration: 2500,
            color: 'primary',
            position: 'bottom',
            icon:'mail-outline'  
          })
          this.utils.routerLink('/auth')
          this.form.reset()
          
        }).catch(error => {
          console.log(error)
          this.utils.showToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            position: 'middle',
            icon:'alert-circle-outline'  
          })
        }).finally(() => {
          loading.dismiss()
        })
      }
    }

}
