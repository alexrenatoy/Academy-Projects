import { NgModule } from '@angular/core';
import { CommonModule as CommonMainModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonMainModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }
