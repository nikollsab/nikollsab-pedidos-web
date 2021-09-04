import { OnInit, Component } from '@angular/core';
import { Pedidos } from '../../interfaces/pedido.interface';
import { ServicioService } from '../../services/servicio.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-administrador-catalogo-list',
  templateUrl: './administrador-catalogo-list.component.html',
  styleUrls: ['./administrador-catalogo-list.component.scss']
})


export class AdministradorCatalogoListComponent implements OnInit {
  displayedColumns: string[] = ['codPedido', 'cliente', 'estado', 'acciones'];
  dataSource: Pedidos[] = [];
  isLoading:boolean = true;

  constructor(
    private servicio: ServicioService,
    public dialog: MatDialog,
    private router: Router
   ) { }



  ngOnInit(): void {
    
    this.servicio.getPedido()
    .subscribe(
      async data => {
        this.dataSource = data;
      }, () => { },
      () => {
        this.isLoading = false;
      }
    );

  }

  verDetalle(element) {
    const navigationExtras: NavigationExtras = {
      state: {
        element
      }
    };
    this.router.navigate(['/principal2/detalle/' + element.pedidoId], );

  }


}
