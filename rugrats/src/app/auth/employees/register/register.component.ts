import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected registerForm: FormGroup;

  constructor() {
    this.registerForm = this.buildForm;
    console.log(this.registerForm.controls)
  }


  get buildForm() {
    return this.formBuilder.group({
      name: ['Andy', [ Validators.required,Validators.minLength(3) ]],
      lastName: ['', [ Validators.required,Validators.minLength(3) ]],
      email: ['', [ Validators.required,Validators.minLength(10) ]],
      phone: [0, [ Validators.required,Validators.minLength(10) ]],
      birthdate: [new Date(), [ Validators.required ]],
      gender: ['', [ Validators.required]],
      notifyOffer: [null, [ Validators.required]],    
    });
  }


  get nameField(): AbstractControl {
  return this.registerForm.controls['name'];
};
  get lastNameField(): AbstractControl {
    return this.registerForm.controls['lastName'];
  };
  get emailField(): AbstractControl {
    return this.registerForm.controls['email'];
  };
  get phoneField(): AbstractControl {
    return this.registerForm.controls['phone'];
  };
  get birthdateField(): AbstractControl {
    return this.registerForm.controls['birthdate'];
  };
  get genderField(): AbstractControl {
    return this.registerForm.controls['gender'];
  };
  get notifyOfferField(): AbstractControl {
    return this.registerForm.controls['notifyOffer'];
  };


}

