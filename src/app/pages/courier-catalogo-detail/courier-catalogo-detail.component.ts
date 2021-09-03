import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { DetallePedidos, Pedidos } from '../../interfaces/pedido.interface';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-courier-catalogo-detail',
  templateUrl: './courier-catalogo-detail.component.html',
  styleUrls: ['./courier-catalogo-detail.component.scss']
})
export class CourierCatalogoDetailComponent implements OnInit {
  displayedColumns: string[] = ['item', 'codProducto', 'nomProducto', 'cantidad'];
  defColumns: string[] = ['numPedido', 'cliente', 'celular', 'dirección', 'correo', 'estado'];
  dataSource: Pedidos[] = [];
  dataSourceDetail: DetallePedidos[] = [];
  idPedido: number;

  constructor(private servicio: ServicioService , private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    // servicio del pedido
    this.servicio.getPedido()
    .subscribe(
      async data => {
        this.dataSource = data;
      }
    );
    console.log('consumiendo servicio detalle-pedido');

    // servicio por id
    this.servicio.getDetallePedidoId(this.idPedido)
    .subscribe(
      async data => {
        this.dataSourceDetail = data;
      }
    );
  }

}
