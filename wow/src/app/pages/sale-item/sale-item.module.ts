import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleItemPageRoutingModule } from './sale-item-routing.module';

import { SaleItemPage } from './sale-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleItemPageRoutingModule
  ],
  declarations: [SaleItemPage]
})
export class SaleItemPageModule {}
