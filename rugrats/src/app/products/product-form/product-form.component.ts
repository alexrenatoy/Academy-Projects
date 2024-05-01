import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);

    protected form: FormGroup;

    constructor() {
      this.form = this.builForm
    }
        get builForm(): FormGroup{
          return this.formBuilder.group({
            name: ['Blusa', Validators.required],
            date: 12/2023,
            description: '',
            color:['Blanco', Validators.required],
            price: [150.98, Validators.required]
          });
        }

    validateForm(){
      if(this.form.valid){
        alert('Valido');
      }
      else{
        alert('no valido');
      }
    }
}
