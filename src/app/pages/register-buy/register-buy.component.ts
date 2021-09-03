import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';
import { ICliente } from '../../interfaces/pedido.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-buy',
  templateUrl: './register-buy.component.html',
  styleUrls: ['./register-buy.component.scss']
})
export class RegisterBuyComponent implements OnInit {

  registerByForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    detarmento: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required])
  });

  constructor(private registerByService: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }



  sendData() {
    if (this.registerByForm.valid) {
      const recruiter: ICliente = this.registerByForm.value;

      let carrito = JSON.parse(localStorage.getItem('carrito'));
      let detallePedido = [];
      carrito.forEach(element => {
        detallePedido.push({
          "cantidad": element.cantidad,
          'producto': {
            'productoId': element.productoId
          },
         
        })
      });

      const obj = {
        'cliente' : recruiter,
        'detallePedidos' : detallePedido,
        "fechaEntrega": '2020-08-22T22:53:40.261Z'
      };
      console.log(obj);
      this.registerByService.register(obj).subscribe(
        async data => {
          if (data != null) {
              localStorage.clear();
              this.router.navigate(['/detalle-compra']);
          }
        },
        err => {
          console.log(err);
          /* this.openDialogInfo('Registro fallido  !', 'Ocurrió un error. Intentelo mas tarde', 'error'); */
        }
      );  
    }
  }
}
