import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Employees } from '../../models/employees';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected registerForm: FormGroup;
  protected employees: Employees[] = [];

  constructor(private employeeService: EmployeesService) {    
    this.registerForm = this.buildForm;
    console.log(this.registerForm.controls)
    this.loadEmployees();
  }


  get buildForm() {
    return this.formBuilder.group({
      email: ['', [ Validators.required,Validators.minLength(10),Validators.maxLength(35),Validators.email ]],
      password: ['', [ Validators.required,Validators.minLength(9),Validators.maxLength(10),]],  
    });
  }
  loadEmployees() {
    this.employees = this.employeeService.getEmployees();
    console.log('Empleados:', this.employees);
  }
}
