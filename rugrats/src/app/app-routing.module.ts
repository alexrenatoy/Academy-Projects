import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "products",
    loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: "common",
    loadChildren:() => import('./common/common.module').then(m => m.CommonModule)
  },
  {
    path: "access",
    loadChildren:() => import('./access/access.module').then(m => m.AccessModule)
  },
  {
    path: "home",
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  
  {
    path: "**",
    redirectTo:"/common/not-found"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
