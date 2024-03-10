import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyres',
  templateUrl: './verifyres.component.html',
  styleUrls: ['./verifyres.component.scss']
})
export class VerifyresComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  successMessage!: string;
  errorMessage!: string;
  isItLoading: boolean = false;

  verifyFrom: FormGroup = new FormGroup({
    resetCode: new FormControl(null)
  })


  verifyYouCode() {
    return this._AuthService.verifyResetCodeAPI(this.verifyFrom.value).subscribe({
      next: (result) => {
        this.isItLoading = true;
        this.successMessage = result.message;
        this._Router.navigate(['/resetpassword'])
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isItLoading = false;
      }
    })
  }
}

