import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  products: any = [];

  constructor(private ras: RestApiService, private cartService: CartService, private rm: ActivatedRoute) { }

  ngOnInit() {
    let id = this.rm.snapshot.paramMap.get("id");
    console.log(id);
    this.ras.productsbyid(id).subscribe((data) => {
      console.log(data);
      var uproducts;
      uproducts = data;
      this.products = uproducts.response;
      console.log(this.products);
      let productIndex = 0;

      this.products[0].count = 1;
      this.products[0].amount = 1;

      let cartitems = this.cartService.getCart();
      for (let cartIndex = 0; cartIndex < cartitems.length; cartIndex++) {
        if (this.products[productIndex].id === cartitems[cartIndex].id) {
          this.products[productIndex] = cartitems[cartIndex];
          productIndex++;

          break;
        }

      }

      console.log(this.products);
      console.log(cartitems);
    }, response => {
      console.log("POST call in error", response);
    },
      () => {
        console.log("The POST observable is now completed.");

      }
    )



  }
  addToCart() {
    this.cartService.addProduct(this.products[0]);
  }
  decreaseProductCount() {
    console.log("dec");
    if (this.products[0].amount > 1) {
      this.products[0].amount--;
      console.log(this.products.amount);
    }
  }
  increaseProductCount() {
    this.products[0].amount++;
    console.log("inc");
    console.log(this.products);
  }
}
