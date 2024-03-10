import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  successMessage!: string;
  errorMessage!: string;
  isItLoading: boolean = false;
  passwordRjx: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*^])[A-Za-z\d@.#$!%*?&]{8,15}$/
  resetPasswordFrom: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(this.passwordRjx)])
  })


  submit() {
    return this._AuthService.resetCodeAPI(this.resetPasswordFrom.value).subscribe({
      next: (result) => {
        this.isItLoading = true;
        this.successMessage = result.message;
        this._Router.navigate(['/login'])
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isItLoading = false;
      }      
    })
  }
}
