import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);

  private formBuilder: FormBuilder = inject(FormBuilder);

    protected loginform: FormGroup;
    router: any;

    constructor() {
      this.loginform = this.builForm
    }
        get builForm(): FormGroup{
          return this.formBuilder.group({
            user: ['',[ Validators.required]],
            password: ['', [Validators.required]],
            
          });
        }

        get user(): AbstractControl{
          return this.loginform.controls['user']
        }

        get password(): AbstractControl{
          return this.loginform.controls['password']
        }

        login() {
          if (this.loginform.valid) {
            this.authService.login();
            this.router.navigate(['/home/principal']);
          }
        }
        
}
