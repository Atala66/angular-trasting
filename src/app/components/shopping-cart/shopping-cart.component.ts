import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shopping-cart-item/shopping-cart-item.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
	public  cartItems: CartItem[] = [
		{
			imageUrl: 'assets/images/beats.jpg',
			name: 'Auriculares',
			price: 12.50
		},
		{
			imageUrl: 'assets/images/teclado.jpg',
			name: 'Teclado',
			price: 25.20
		}
	];

  constructor() { }

  ngOnInit() { }


  deleteItem(itemToDelete: CartItem) {
	this.cartItems = this.cartItems.filter((item =>  item !== itemToDelete ));

  }

}
