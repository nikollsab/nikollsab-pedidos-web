import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  cantidad = 0;
  constructor() {
    setInterval(() => {
      this.obtenerCarrito();
    }, 1000);
  }
  obtenerCarrito(){
    this.cantidad = 0;
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.forEach(element => {
      this.cantidad += element.cantidad;
    });
  }
  ngOnInit(): void {

  }



}
