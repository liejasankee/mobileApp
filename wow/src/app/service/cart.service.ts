import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalServiceService } from '../service/global-service.service';
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  count: number;
  check: boolean;

}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  data: Product[] = [
    { id: 0, name: 'Pizza Salami', price: 8.99, amount: 0, count: 0, check: true }
  ];

  constructor(private gs: GlobalServiceService) { }
  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    console.log("success");
    for (let p of this.cart) {
      if (p.id === product.id) {
        console.log(this.cart);
        added = true;
        break;
      }

    }
    if (!added) {
      //product.count = 1;
      //product.amount = 1;
      let newProduct = product;
      this.cart.push(newProduct);
      this.cartItemCount.next(this.cartItemCount.value + 1);
      console.log(this.cart);

    }




  }

  plus(product) {
    let added = false;
    for (let p of this.cart) {

      if (p.id === product.id) {
        console.log("hi");
        p.count += 1;
        p.amount += 1;
        p.entered = true;
        added = true;
        break;
      }
    }
    if (!added) {
      product.count = 1;
      product.amount = 2;
      product.entered = false;

      this.cart.push(product);
    }

  }



  minus(product) {
    if ((product.amount > 1) && (this.gs.change == false)) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          p.count -= 1;
          p.amount -= 1;
        }
        if (p.amount == 1) {
          this.cart.splice(index, 1);
          p.count = 1;
          p.amount = 1;
        }
      }
    }
    if (this.gs.change == true) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          console.log(p.count);
          p.count -= 1;
          p.amount -= 1;
          console.log(p.count);
        }
        if (p.amount == 0) {
          this.cart.splice(index, 1);
          p.count = 1;
          p.amount = 1;
          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }

    }

  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.count = 1;
        p.amount = 1;
        product.entered = false;
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.cart.splice(index, 1);
      }
    }
  }

}
