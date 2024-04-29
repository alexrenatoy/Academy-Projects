import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
