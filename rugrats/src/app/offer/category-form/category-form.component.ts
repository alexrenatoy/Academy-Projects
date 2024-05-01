import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
private formBuilder:FormBuilder = inject(FormBuilder);

protected nameControl: FormControl = new FormControl<string>('juan');
protected birthdateControl: FormControl = new FormControl<Date>(new Date());
protected numberControl: FormControl = new FormControl<number>(0);
protected booleanoControl: FormControl = new FormControl(false);
 
protected form : FormGroup;

constructor(){
this.form = this.buildForm;

}

get buildForm():FormGroup{
  return this.formBuilder.group({
    name:['juan',[Validators.required, Validators.minLength(3)]],
    birthdate:[null,Validators.required],
    number:['0',[Validators.min(0),Validators.maxLength(12)]],
    booleano:[false,Validators.required]
  });
}
validateForm1(){
  if(this.nameControl.valid && this.birthdateControl.valid && this.numberControl.valid && this.booleanoControl.valid)
    alert('Valido');
  else{
    alert('No Valido');
  }
};
validateForm2(){
  if(this.form.valid){
    alert('Valido')
  }
  else{
    alert('No Valido');
  }
}

}
