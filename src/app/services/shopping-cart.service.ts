import { Injectable } from '@angular/core';
import { CartItem } from 'app/components/shopping-cart-item/shopping-cart-item.interface';

@Injectable( )
export class ShoppingCartService {

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
		},
		{
			imageUrl: 'assets/images/monitor.jpg',
			name: 'Monitor',
			price: 125.99
		}
	];


	get total(): number {
		return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
	  }

	  deleteItem(itemToDelete: CartItem) {
		this.cartItems = this.cartItems.filter((item =>  item !== itemToDelete ));
	  }





}
