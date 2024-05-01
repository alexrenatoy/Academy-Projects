import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {

  form:FormGroup;
  constructor(formBuilder:FormBuilder){
    this.form= formBuilder.group({
      isActive: [null,[Validators.required]], 
      name: [null,[Validators.required]], 
      phone: [null,[Validators.required, Validators.minLength(10)]], 
      email: [null,[Validators.required, Validators.email]], 
      address: [null,[Validators.required]],
      bankAccount: [null,[Validators.required]], 
      registrationDate: [null,[Validators.required]] 
    })
  }

  validateForm(){
  if(this.form.valid){
    alert("Es válido")
    console.log(this.form.value)
  }else{
    alert("No es válido")
  }    
  }
}
