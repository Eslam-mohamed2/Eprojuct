import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdectsService } from '../prodects.service';
import { prodect } from '../prodect';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent  implements OnInit{
  //construtor
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProdectsService: ProdectsService) {}
  //variables
  productId!: string;
  product!: prodect;
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (result) => {
        this.productId = result["id"]
      }
    })
    this._ProdectsService.getSpecificProdect(this.productId).subscribe({
      next: (result) => {        
        this.product = result.data;
      }
      
    })
  }

}
