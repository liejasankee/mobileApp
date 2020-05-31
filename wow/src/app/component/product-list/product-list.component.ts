import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../rest-api.service'
import { FolderPage } from '../../folder/folder.page'
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // BuyonegetOne: boolean;
  // InSale: boolean;
  products: any = [];
  @Input() link: FolderPage;
  carts: any = {
    path: 'assets/lottie/cart.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  };
  constructor(private ras: RestApiService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    console.log(this.link);
    this.ras.allproducts(this.link).subscribe((data) => {
      console.log(data);
      var uproducts;
      let cartitems = this.cartService.getCart();
      uproducts = data;
      this.products = uproducts.response;
      Object.keys(this.products).forEach(key => {
        this.products[key].count = 1;
        this.products[key].amount = 1;
      });
      console.log("cartitems -> ", cartitems);
      for (let productIndex = 0; productIndex < this.products.length; productIndex++) {
        for (let cartIndex = 0; cartIndex < cartitems.length; cartIndex++) {
          if (this.products[productIndex].id === cartitems[cartIndex].id) {
            this.products[productIndex] = cartitems[cartIndex];

            break;
          }
        }
      }




      console.log(uproducts.response.buyonegetone);
      console.log(this.products);
    }, response => {
      console.log("POST call in error", response);
    },
      () => {
        console.log("The POST observable is now completed.");

      }
    )
  }
  openproductdetail(id) {
    console.log(id);
    this.router.navigate(['/productdetail', id]);
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
  decreaseProductCount(product) {
    if (product.amount > 1) {
      product.amount--;
    }
  }
  increaseProductCount(product) {
    product.amount++;

  }

}
