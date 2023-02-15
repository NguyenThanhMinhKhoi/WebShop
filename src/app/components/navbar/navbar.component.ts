import { Component } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(public cartService: CartService ){
  
}
}