import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';
import { Employees } from '../../../models/employees';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected registerForm: FormGroup;
  

  constructor(private router: Router, private employeeService: EmployeesService) {    
    this.registerForm = this.buildForm;
    console.log(this.registerForm.controls)
  }


  get buildForm() {
    return this.formBuilder.group({
      name: ['', [ Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*') ]],
      lastName: ['', [ Validators.required,Validators.minLength(3), Validators.maxLength(15),Validators.pattern('[a-zA-Z ]*') ]],
      email: ['', [ Validators.required,Validators.minLength(10),Validators.maxLength(35),Validators.email ]],
      phone: ['', [ Validators.required,Validators.minLength(9),Validators.maxLength(10),Validators.pattern('^[0-9]*$') ]],
      birthdate: [new Date(), [ Validators.required ]],
      gender: ['', [ Validators.required]],
      notifyOffer: [false, [ Validators.requiredTrue]],    
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

  validateForm(){
    if (this.registerForm.valid){
      for (let item of Object.values(this.registerForm.controls))
        console.log(item.value)
      const newEmployee: Employees = this.registerForm.value;
      this.employeeService.registerEmployee(newEmployee);
      this.router.navigate(['/login']);
    }else {
      alert('Error al registrarte')
    }
  }
}

