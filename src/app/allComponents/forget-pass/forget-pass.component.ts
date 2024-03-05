import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  constructor(private _authS : AuthService, private _router : Router){}

  form1:boolean = true;
  form2:boolean = false;
  form3:boolean = false;
  email: string = '';
  messege:string = '';

  

  forgetPassForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  resetPassForm:FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  })

  newPassForm:FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  })
  forgetPass():void{
    const userData = this.forgetPassForm.value;
    this.email = userData.email;
      this._authS.forgetPassword(userData).subscribe({
        next: (res) => {
          if(res.statusMsg === 'success'){
            // console.log(res);
            this.messege = res.message;
            this.form1 = false;
            this.form2 = true;
          }
        },
        error: (err) => {
          if(err.error.statusMsg === 'fail'){
            console.log(err);
            this.messege = err.error.message;
          }
        }
      })
  }

  verifyCode():void{
    const userData = this.resetPassForm.value;
    this._authS.verifyCode(userData).subscribe({
      next: (res) => {
        if(res.status === 'Success'){
          console.log(res);
          this.messege = res.status;
          this.form2 = false;
          this.form3 = true;
        }
      },
      error: (err) => {
        if(err.error.statusMsg === 'fail'){
          console.log(err);
          this.messege = err.error.message;
        }
      }
    })
  }

  resetDone():void{
    const userData = this.newPassForm.value;
    userData.email = this.email;
    
    this._authS.newPasswordReset(userData).subscribe({
      next: (res) => {
        // console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
      },
      error: (err) => {
        if(err.error.statusMsg === 'fail'){
          // console.log(err);
          this.messege = err.error.message;
        }
      }
    })
    
  }
}
