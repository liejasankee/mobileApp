import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component'
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';
import { FooterComponent } from './footer/footer.component';
import { MailformComponent } from './mailform/mailform.component'
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms'
const component = [
  ProductListComponent, FooterComponent, MailformComponent, HeaderComponent, CartComponent
]

@NgModule({
  declarations: [component],
  imports: [
    CommonModule, IonicModule, LottieAnimationViewModule, FormsModule
  ],
  entryComponents: [...component],

  exports: [...component]
})
export class ComponentModule { }
