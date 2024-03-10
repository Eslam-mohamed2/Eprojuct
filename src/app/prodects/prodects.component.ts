import { Component, OnInit } from '@angular/core';
import { ProdectsService } from '../prodects.service';
import { Router } from '@angular/router';
import { prodect } from '../prodect';

@Component({
  selector: 'app-prodects',
  templateUrl: './prodects.component.html',
  styleUrls: ['./prodects.component.scss']
})
export class ProdectsComponent implements OnInit {
  constructor(private _ProdectsService: ProdectsService, private _Router: Router) { }
  prodects: prodect[] = []

  ngOnInit(): void {
    this._ProdectsService.getAllProdects().subscribe({
      next: (result) => {
        this.prodects = result.data;
      }
    })
  }
}
