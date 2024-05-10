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
    console.log(this.registerForm)
  }


  get buildForm() {
    return this.formBuilder.group({
      name: ['', [ Validators.required,Validators.minLength(3) ]],
      lastName: ['', [ Validators.required,Validators.minLength(3) ]],
      email: ['', [ Validators.required,Validators.minLength(10) ]],
      phone: [0, [ Validators.required,Validators.minLength(10) ]],
      birthdate: [new Date(), [ Validators.required ]],
      gender: ['', [ Validators.required]],
      notifyOffer: [false, [ Validators.required]],    
    });
  }


  get nameField(): AbstractControl {
  return this.registerForm.controls['name'];
};

  get birthdateField(): AbstractControl {
    return this.registerForm.controls['birthdate'];
  };


}

