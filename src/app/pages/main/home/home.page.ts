import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  utilsSrv = inject(UtilsService)
  firebaseSrv = inject(FirebaseService)
  products: Product[] = []
  loading: boolean = false
  constructor() { }

  ngOnInit() {
  }
  doRefresh($event){

  }
  addUpdateProduct(product?:Product){
    this.utilsSrv.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal',
      componentProps: { product }
    })
  }

}
