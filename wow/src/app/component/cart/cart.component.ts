import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CartService, Product } from '../../service/cart.service';
import { GlobalServiceService } from '../../service/global-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private gs: GlobalServiceService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    this.gs.change = true;
  }
  ngOnDestroy() {
    this.gs.change = false;
    console.log("hi");
  }

  decreaseCartItem(product) {
    this.cartService.minus(product);
  }
  increaseCartItem(product) {
    this.cartService.plus(product);
  }
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  close() {
    this.modalCtrl.dismiss();
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your Products as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }

}
