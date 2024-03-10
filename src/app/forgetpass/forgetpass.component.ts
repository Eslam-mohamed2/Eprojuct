import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})

export class ForgetpassComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  successMessage!: string;
  errorMessage!: string;
  isItLoading: boolean = false;

  forgetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  

  emailSubmit() {
    return this._AuthService.forgetPasswordAPI(this.forgetPassForm.value).subscribe({
      next: (res) => {
        this.isItLoading = true;
        this.successMessage = res.message;
        this._Router.navigate(['/verifyres'])      
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isItLoading = false;
        
        
      }
    })
  }
}
