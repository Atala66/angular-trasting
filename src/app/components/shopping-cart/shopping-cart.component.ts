import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { CartItem } from '../shopping-cart-item/shopping-cart-item.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
//    public cartItems = this.shoppingCartSrv.cartItems;

  showItems = true;

  constructor(
	private shoppingCartSrv: ShoppingCartService
  ) { }

  ngOnInit() { }



  get cartItems(): CartItem[] {
	return this.shoppingCartSrv.cartItems;
  }

  get total() {
	return this.shoppingCartSrv.total;
  }

  deleteItem(itemToDelete: CartItem): void {
     this.shoppingCartSrv.deleteItem(itemToDelete);
  }

  toogleItemsVisibility() {
	this.showItems = !this.showItems;
  }



}
