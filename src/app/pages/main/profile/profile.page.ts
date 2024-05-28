import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth } from '@angular/fire/auth';  // Importa getAuth de Firebase

import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  utils = inject(UtilsService)
  firebase = inject(FirebaseService)

  form = new FormGroup({
    uid: new FormControl(''),
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl({ value: '', disabled: true })
//    password: new FormControl('',[Validators.required]),
  })
  constructor() { }

  ngOnInit() {
    this.loadUserInfo()
  }

  async loadUserInfo() {
    const localUser = this.utils.getFromLocalStorage('user');
    if (localUser) {
      this.form.patchValue(localUser);
    }

    const userId = localUser?.uid || getAuth().currentUser?.uid;
    if (userId) {
      const userData = await this.firebase.getDocument(`users/${userId}`);
      if (userData) {
        this.form.patchValue(userData);
      }
    }
  }

  async submit() {
    if (this.form.valid) {
      const userData = this.form.value
      try {
        await this.firebase.updateProfile(userData.name);
        await this.firebase.setDocument(`users/${userData.uid}`, userData);
        this.utils.saveInLocalStorage('user', userData);
        this.utils.routerLink('main/home');
      } catch (err) {
        this.utils.showToast({
          message: err.message,
          color: 'danger',
          position: 'middle',
          duration: 3000,
          icon: 'alert-circle-outline'
        });
      }
    }
  }
}
