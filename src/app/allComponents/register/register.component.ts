import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _authS : AuthService, private _router : Router){}
  errMsg:string = '';
  isLoading:boolean = false;

  registerForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  },
  {
    validators: [this.checkRepassword()]
  }
  )

  checkRepassword():ValidatorFn{
    return (form:AbstractControl) => {
      const passwordVal = form.get('password')?.value;
      const rePasswordVal = form.get('rePassword')?.value;
      if(passwordVal === rePasswordVal){
        return null;
      }
      else{
        return {notmatch: true}
      }
    }
  }

  handelForm():void{
    const userData = this.registerForm.value;
    this.isLoading = true
    if(this.registerForm.valid === true){
      this._authS.register(userData).subscribe({
        next: (res) => {
          // console.log(res);
          if(res.message === 'success'){
            this.isLoading = false;
            this._router.navigate(['/login'])
          }
        },
        error: (err) => {
          // console.log(err);
          this.isLoading = false;
          this.errMsg = err.error.message;
        }
      })
    }
  }

}
