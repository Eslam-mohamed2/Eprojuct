import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brand } from '../brand';
import { prodect } from '../prodect';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _BrandsService: BrandsService){}

  brands: Brand[] = [];
  specialBrandProducts!: prodect[];

  ngOnInit(): void {
    this._BrandsService.getAlProducts().subscribe({
      next: (result) => { 
        this.brands = result.data;
      }
    })
  }

  displayProdects(id: string): void {
    this._BrandsService.getSpecificeBrand(id).subscribe({
      next: (result) => {
        this.specialBrandProducts = result.data;
        // console.log(result.data);
        console.log(this.specialBrandProducts);
      }
    })
  }
}
