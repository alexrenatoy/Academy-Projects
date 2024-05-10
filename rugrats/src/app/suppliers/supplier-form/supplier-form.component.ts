import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this._form
  }

  validateForm() {
    if (this.form.valid) {
      alert("Es válido");
      console.log(this.form.value)
    } else {
      alert("No es válido");
    }
  }

  get _form(): FormGroup {
    return this.formBuilder.group({
      isActive: [true, [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['algo@gmail.com', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      bankAccount: ['', [Validators.required]],
      registrationDate: ['', [Validators.required]]
    })
  }

  get isActive(): AbstractControl {
    return this.form.controls['isActive']
  }

  get name(): AbstractControl {
    return this.form.controls['name']
  }

  get phone(): AbstractControl {
    return this.form.controls['phone']
  }

  get email(): AbstractControl {
    return this.form.controls['email']
  }

  get address(): AbstractControl {
    return this.form.controls['address']
  }

  get bankAccount(): AbstractControl {
    return this.form.controls['bankAccount']
  }

  get registrationDate(): AbstractControl {
    return this.form.controls['registrationDate']
  }

  onlyNumber(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
