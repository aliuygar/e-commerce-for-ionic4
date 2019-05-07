import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './../UserService';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products:Observable<{}>;;
  
  constructor(
    public menuCtrl:MenuController,
    public afstore:AngularFirestore, 
    public service:UserService, ) 
  {this.menuCtrl.enable(true)
    this.products= this.afstore.doc(`products/${this.service.getpId()}`).valueChanges();;
    
    
    console.log(this.products)
    
   }

  
}
