import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-preview',
  templateUrl: './shopping-cart-preview.component.html',
  styleUrls: ['./shopping-cart-preview.component.scss']
})
export class ShoppingCartPreviewComponent implements OnInit {

  columndefs: any[] = ['imagen', 'precio-unidad', 'precio-total'];
  displayedColumns: string[] = [
    'subtotal',
    'total'
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
