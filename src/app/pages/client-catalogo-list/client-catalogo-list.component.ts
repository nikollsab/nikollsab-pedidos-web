import { Component, OnInit, Input } from '@angular/core';
import { Pedidos, Productos } from '../../interfaces/pedido.interface';
import { ServicioService } from '../../services/servicio.service';
import { element } from 'protractor';

@Component({
  selector: 'app-client-catalogo-list',
  templateUrl: './client-catalogo-list.component.html',
  styleUrls: ['./client-catalogo-list.component.scss'],
})
export class ClientCatalogoListComponent implements OnInit {
  columndefs: any[] = ['nombre', 'descripcion', 'precio', 'accion'];
  dataSource: Productos[] = [];
  carrito: any[] = [];
  isLoading:boolean = true;

  constructor(
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
    this.servicio.getProducto()
      .subscribe(
        async data => {
          this.dataSource = data;
        }, () => { },
        () => {
          this.isLoading = false;
        }
      );
  }

  agregarCarrito(element) {
    let noexiste = true;
    if (this.carrito.length > 0) {
      console.log('se agrego al carrito mas de uno');
      this.carrito.map(function (item) {
        if (item.productoId == element.productoId) {
          noexiste = false;
          element.cantidad = element.cantidad + 1;
        }
        return item;
      });
    }
    else {
      console.log('se agrego al carrito uno');
      element.cantidad = 1;
      this.carrito.push(element);
      return true;
    }
    if (noexiste && this.carrito.length > 0) {
      console.log('se agregaron varios');
      element.cantidad = 1;
      this.carrito.push(element);
    }

    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
