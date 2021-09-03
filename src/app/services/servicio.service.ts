import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicioModule } from './servicio.module';
import { Pedidos, Productos, DetallePedidos, DetallePedidosId, IEstado } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: ServicioModule
})
export class ServicioService {
  private key = 'token';


  constructor(private http: HttpClient) { }
  destroy() {
    sessionStorage.removeItem(this.key);
  }
  getPedido(): Observable<Pedidos[]>{
    const usuario:any =  JSON.parse(localStorage.getItem('usuario'));
    return this.http.get<Pedidos[]>('https://app-pedidos-unac.herokuapp.com/v1/pedidos/tipo-usuario/'+ usuario.tipoUsuario);
  }
  register (data: any) {
    return this.http.post<any>('https://app-pedidos-unac.herokuapp.com/v1/pedidos', data);

  }
  registerUser (data: any) {
    return this.http.post<any>('https://app-pedidos-unac.herokuapp.com/v1/usuario', data);

  }
  loginUser (data:any) {
    return this.http.post<any>(' https://app-pedidos-unac.herokuapp.com/v1/usuario/login',data);

  }

getPedidoId(pedidoId:any): Observable<Pedidos>{
  return this.http.get<Pedidos>('https://app-pedidos-unac.herokuapp.com/v1/pedidos/' + pedidoId);
}
getEstadoId(estadoId: number): Observable<IEstado>{
  return this.http.get<IEstado>('https://app-pedidos-unac.herokuapp.com/v1/estados/' + estadoId);
}
getDetallePedidoId(id: any): Observable<DetallePedidos[]>{
  return this.http.get<DetallePedidos[]>('https://app-pedidos-unac.herokuapp.com/v1/pedidos/' + id +'/detalle-pedidos');
}

getProducto(): Observable<Productos[]>{
  return this.http.get<Productos[]>('https://app-pedidos-unac.herokuapp.com/v1/productos');
}

actualizarEstado(): Observable<IEstado[]>{
  return this.http.get<IEstado[]>('https://app-pedidos-unac.herokuapp.com/v1/estados');
}
promoverEstadoPedido(pedidoId:string): Observable<any>{
  return this.http.post<any>('https://app-pedidos-unac.herokuapp.com/v1/historial-pedidos' , {'pedidoId':  pedidoId});
}



}

