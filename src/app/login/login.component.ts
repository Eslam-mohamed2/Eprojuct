import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router){}
  
  successMessage!: string;
  errorMessage!: string;
  isItLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null ,[Validators.required ,Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$')]) 
})

  loginSubmit() {
    this._AuthService.loginAPI(this.loginForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('userToken', res.token)
        this._AuthService.dataSaving()
        this.successMessage = res.message;
        this.isItLoading = true;
        this._Router.navigate(['/home']);
        
       },
      error: (err) => { this.errorMessage = err.error.message; this.isItLoading = true; }

    })
}

  forgetPass() {  
      this._Router.navigate(['/forgetpass'])
}

}
