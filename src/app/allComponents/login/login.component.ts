import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _authS : AuthService, private _router : Router){}
  errMsg:string = '';
  isLoading:boolean = false;

  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  }
  )

  handelForm():void{
    const userData = this.loginForm.value;
    this.isLoading = true;
    if(this.loginForm.valid === true){
      this._authS.login(userData).subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success'){

            this.isLoading = false;

            localStorage.setItem('token', res.token);

            this._router.navigate(['/home']);
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
