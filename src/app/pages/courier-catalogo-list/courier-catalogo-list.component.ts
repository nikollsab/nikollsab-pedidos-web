import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '../../../../node_modules/@angular/router';
import { CourierCatalogoDetailComponent } from '../courier-catalogo-detail/courier-catalogo-detail.component';
import { Pedidos } from '../../interfaces/pedido.interface';

@Component({
  selector: 'app-courier-catalogo-list',
  templateUrl: './courier-catalogo-list.component.html',
  styleUrls: ['./courier-catalogo-list.component.scss']
})
export class CourierCatalogoListComponent implements OnInit {
  displayedColumns: string[] = ['codPedido', 'cliente', 'estado', 'acciones'];
  dataSource: Pedidos[] = [];

  constructor(
    private servicio: ServicioService,
    public dialog: MatDialog,
    private router: Router
   ) { }

   openDialog() {
    const dialogRef = this.dialog.open(CourierCatalogoDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {

    this.servicio.getPedido()
    .subscribe(
      async data => {
        this.dataSource = data;

        // console.log(data[0], 'elemento 1');
      }
    );

    console.log('Consumiendo servicio de pedido', this.servicio);
  }

  goDetail(pedidoId) {
    this.router.navigate(['/detalle-courier', pedidoId]);
  }


}
