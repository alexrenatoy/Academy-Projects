import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "common",
    loadChildren:() => import('./common/common.module').then(m => m.CommonModule)
  },
  {
    path: "login",
    redirectTo:"/auth/login"
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
