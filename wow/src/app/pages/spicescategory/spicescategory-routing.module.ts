import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpicescategoryPage } from './spicescategory.page';

const routes: Routes = [
  {
    path: '',
    component: SpicescategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpicescategoryPageRoutingModule {}
