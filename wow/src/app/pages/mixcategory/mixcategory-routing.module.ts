import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixcategoryPage } from './mixcategory.page';

const routes: Routes = [
  {
    path: '',
    component: MixcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixcategoryPageRoutingModule {}
