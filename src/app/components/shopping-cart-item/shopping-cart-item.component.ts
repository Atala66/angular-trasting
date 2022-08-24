import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { CartItem } from './shopping-cart-item.interface';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
@Input() cartItem: CartItem;
@Output() cartItemDelete =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onDeleteItem(): void {
	this.cartItemDelete.emit();

  }

}
