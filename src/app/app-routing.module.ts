import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotForundComponent } from './not-forund/not-forund.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { VerifyresComponent } from './verifyres/verifyres.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { authGuard } from './auth.guard';
import { ProdectsComponent } from './prodects/prodects.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", canActivate: [authGuard], component: HomeComponent,},
  { path: "cart", canActivate: [authGuard], component: CartComponent },
  { path: "categories", canActivate: [authGuard], component: CategoriesComponent },
  { path: "prodects", canActivate: [authGuard], component: ProdectsComponent },
  { path: "productdetails/:id", canActivate: [authGuard], component: ProductdetailsComponent },
  { path: "brands", canActivate: [authGuard], component: BrandsComponent },
  { path: "wishlist", canActivate: [authGuard], component: WishlistComponent },
  { path: "forgetpass",canActivate: [authGuard], component: ForgetpassComponent },
  { path: "verifyres", canActivate: [authGuard], component: VerifyresComponent },
  { path: "resetpassword", canActivate: [authGuard], component: ResetpasswordComponent },
  { path:"productdetails" , canActivate:[authGuard], component:ProductdetailsComponent},
  { path: "**", component: NotForundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
