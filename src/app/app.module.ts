import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdectComponent } from './prodect/prodect.component';
import { BrandsComponent } from './brands/brands.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { NotForundComponent } from './not-forund/not-forund.component';
import { CartComponent } from './cart/cart.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyresComponent } from './verifyres/verifyres.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchingPipe } from './searching.pipe';
  



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProdectComponent,
    BrandsComponent,
    WishlistComponent,
    CategoriesComponent,
    RegisterComponent,
    NotForundComponent,
    CartComponent,
    ProdectsComponent,
    VerifyresComponent,
    ResetpasswordComponent,
    ForgetpassComponent,
    ProductdetailsComponent,
    SearchingPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule ,
    CarouselModule ,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
