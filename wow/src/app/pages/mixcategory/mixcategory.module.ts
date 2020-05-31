import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixcategoryPageRoutingModule } from './mixcategory-routing.module';

import { MixcategoryPage } from './mixcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixcategoryPageRoutingModule
  ],
  declarations: [MixcategoryPage]
})
export class MixcategoryPageModule {}
