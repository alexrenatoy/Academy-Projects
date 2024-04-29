import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
