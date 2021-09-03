import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Pedidos, DetallePedidos, IEstado } from 'src/app/interfaces/pedido.interface';

@Component({
  selector: 'app-administrador-catalogo-detail',
  templateUrl: './administrador-catalogo-detail.component.html',
  styleUrls: ['./administrador-catalogo-detail.component.scss']
})
export class AdministradorCatalogoDetailComponent implements OnInit {

  displayedColumns: string[] = ['item', 'codProducto', 'nombreProducto', 'cantidad'];
  dataSource: DetallePedidos[] = [];
  pedidoId: string;
  pedido: Pedidos;
  estado: IEstado;
  isLoading: boolean = true;
  mostrarError: boolean = false;

  constructor(
    private servicio: ServicioService,
    private router: ActivatedRoute) {
    this.pedidoId = this.router.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.obtenerPedido();
    this.servicio.getDetallePedidoId(this.pedidoId)
      .subscribe(
        async data => {
          console.log(data);
          this.dataSource = [...data];
        }
      );
  }
  obtenerPedido() {
    this.servicio.getPedidoId(this.pedidoId)
      .subscribe(
        async data => {
          this.pedido = data;
          this.obtenerEstado(data.estado.estadoId);
        }
      );
  }
  obtenerEstado(estadoId) {
    this.servicio.getEstadoId(estadoId + 1)
      .subscribe(
        async data => {
          this.estado = data;
        }, () => {  
          this.isLoading = true;
          this.mostrarError = true;
        },
        () => {
          this.isLoading = false;
        }
      );
  }
  promoverEstadoPedido() {
    this.servicio.promoverEstadoPedido(this.pedidoId)
      .subscribe(
        async data => {
          this.obtenerPedido();
        }
      );
  }

}
