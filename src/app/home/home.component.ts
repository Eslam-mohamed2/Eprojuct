import { Component, OnInit } from '@angular/core';
import { ProdectsService } from '../prodects.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category, prodect } from '../prodect';
import { CategoiesService } from '../categoies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProdectsService: ProdectsService, private _Router: Router, private _CategoiesService: CategoiesService) { }
  prodects: prodect[] = [];
  categories: Category[] = [];
  searchValue!: string;

  categoryOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };


  ngOnInit(): void {
    // getting all products
    this._ProdectsService.getAllProdects().subscribe({
      next: (result) => {
        this.prodects = result.data;
      } 
    })
    this._CategoiesService.getAllcateroies().subscribe({
      next: (result) => {
        this.categories = result.data;
      }
    })  
  }

  // testing code 
  displaySearchValue() {
    console.log(this.searchValue)
  }
}
