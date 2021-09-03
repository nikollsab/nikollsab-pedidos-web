import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../interfaces/carrito.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = [ 'nombre','descripcion','cantidad','precio','subtotal'];

  carrito: Carrito[] = [];
  total: number = 0;

  tieneProductos: boolean = false;

  constructor() {
     
  }

  ngOnInit(): void {
    this.carrito = JSON.parse(localStorage.getItem('carrito'));

    if(this.carrito == null) {
      this.tieneProductos = false;
    } else {
      this.tieneProductos = true;

      this.carrito.forEach(element => {
        this.total += element.precio + element.cantidad;
      });
      console.log(this.carrito);
    }
    }
   


}
