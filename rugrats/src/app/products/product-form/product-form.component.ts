import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            name: ['', Validators.required],
            date: [new Date(), [Validators.required]],
            description:['', Validators.required, Validators.minLength(30)],
            color:['', Validators.required, Validators.maxLength(10)],
            price: [0, Validators.required],
            availability: [false]
          });
        }

        get name(): AbstractControl{
          return this.form.controls['name']
        }

        get date(): AbstractControl{
          return this.form.controls['date']
        }

        get description(): AbstractControl{
          return this.form.controls['description']
        }

        get color(): AbstractControl{
          return this.form.controls['color']
        }

        get price(): AbstractControl{
          return this.form.controls['price']
        }

        get availability(): AbstractControl{
          return this.form.controls['availability']
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
