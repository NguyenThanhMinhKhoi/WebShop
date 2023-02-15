import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 constructor(public cart:CartService){}
  like(id:number){
    console.log(`Click like ${id}`)
  }
  share(id:number){
    console.log(`Share ${id}`)
  }
  
 
}
