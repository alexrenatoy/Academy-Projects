import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);

    protected form: FormGroup;
    data: any;

    constructor(private authService: AuthService) {
      this.form = this.builForm();
    }
  
        builForm(): FormGroup{
          return this.formBuilder.group({
            name: ['',[ Validators.required, Validators.minLength(5)]],
            date: [new Date(), [Validators.required]],
            description:['', [Validators.required, Validators.minLength(10)]],
            color:['', [Validators.required, Validators.maxLength(8)]],
            price: [0, [Validators.required]],
            availability: [false, [Validators.required]]
          });
        }


        ngOnInit(): void {
          this.data = this.authService.getData();
    if (this.data) {
      this.form.patchValue(this.data);
    }
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
