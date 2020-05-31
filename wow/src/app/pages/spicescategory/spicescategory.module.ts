import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpicescategoryPageRoutingModule } from './spicescategory-routing.module';

import { SpicescategoryPage } from './spicescategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpicescategoryPageRoutingModule
  ],
  declarations: [SpicescategoryPage]
})
export class SpicescategoryPageModule {}
