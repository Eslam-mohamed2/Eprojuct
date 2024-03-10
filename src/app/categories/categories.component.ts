import { Component, OnInit } from '@angular/core';
import { CategoiesService } from '../categoies.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { prodect } from '../prodect';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _CategoiesService: CategoiesService, private _ActivatedRoute: ActivatedRoute) { }
  // variables  
  // catrgoryId!: string;
  categories: Category[] = [];
  specialCategoryProducts: prodect[] = [];

  ngOnInit(): void {
    //* display all the categories we have 
    this._CategoiesService.getAllcateroies().subscribe({
      next: (result) => {
        this.categories = result.data;
      }      
    })    
  }

  
  displayProdects(id:string): void {
    this._CategoiesService.getSpecificCategory(id).subscribe({
      next: (result) => {
        this.specialCategoryProducts = result.data;
        // console.log(result.data);
        console.log(this.specialCategoryProducts);
      }
    })
  }
}
