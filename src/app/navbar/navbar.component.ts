import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  constructor(private _AuthService: AuthService, private _Router:Router){}
  ngOnInit(): void {
    this._AuthService.userDataVar.subscribe(() => {
      if (this._AuthService.userDataVar.getValue() == null)
        this.isLogin = false;
      else
        this.isLogin = true;
    }) 
  }

  logout():void {
    localStorage.removeItem('userToken');
    this._AuthService.dataSaving();
    this._Router.navigate(['/login']);
  }
}
