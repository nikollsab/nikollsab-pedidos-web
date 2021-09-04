import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/pedido.interface';
import { Carrito } from 'src/app/interfaces/carrito.interface';

@Component({
  selector: 'app-detalle-compra-view',
  templateUrl: './detalle-compra-view.component.html',
  styleUrls: ['./detalle-compra-view.component.scss']
})
export class DetalleCompraViewComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre','descripcion','cantidad','precio','subtotal'];
  carrito: Carrito[] = [];
  total: number = 0;
  isSuccess: boolean = true;

  constructor( ) {
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
  
    this.carrito.forEach(element => {
      this.total += element.precio + element.cantidad;
    });
   }

  ngOnInit(): void {
    localStorage.clear();
  }

}
