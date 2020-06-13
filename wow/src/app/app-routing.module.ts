import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./service/services/auth-guard.service";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },

  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'folder/ShopAll/categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'firstpage',
    loadChildren: () => import('./pages/first-page/first-page.module').then(m => m.FirstPagePageModule)
  },
  {
    path: 'productdetail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'folder/ShopAll/sale-item',
    loadChildren: () => import('./pages/sale-item/sale-item.module').then(m => m.SaleItemPageModule)
  },
  {
    path: 'folder/spicescategory',
    loadChildren: () => import('./pages/spicescategory/spicescategory.module').then(m => m.SpicescategoryPageModule)
  },
  {
    path: 'folder/mixcategory',
    loadChildren: () => import('./pages/mixcategory/mixcategory.module').then(m => m.MixcategoryPageModule)
  },
  {
    path: 'pages/register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'folder/ShopAll/contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
