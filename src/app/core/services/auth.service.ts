import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _authS : HttpClient) { }

  register(userData:object):Observable<any>{
    return this._authS.post('/api/v1/auth/signup', userData);
  }
  login(userData:object):Observable<any>{
    return this._authS.post('/api/v1/auth/signin', userData);
  }

  forgetPassword(userData:object):Observable<any>{
    return this._authS.post('/api/v1/auth/forgotPasswords', userData);
  }

  verifyCode(userData:object):Observable<any>{
    return this._authS.post('/api/v1/auth/verifyResetCode', userData);
  }
  newPasswordReset(userData:object):Observable<any>{
    return this._authS.put('/api/v1/auth/resetPassword', userData);
  }

}
