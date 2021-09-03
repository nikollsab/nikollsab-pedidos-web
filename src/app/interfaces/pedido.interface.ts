export interface ICliente {

  apellido: string;
  celular: string;
  clienteId: number;
  correo: string;
  detarmento: string;
  direccion: string;
  distrito: string;
  documento: string;
  nombre: string;
  provincia: string;
}

export interface IEstado {
estadoId: number;
nombre: string;
}

export interface Pedidos{
  cliente: ICliente;
  estado: IEstado;
  fechaEntrega: string;
  pedidoId: number;
}

export interface ICategoria {
  categoriaId: number;
  nombre: string;
}

export interface Productos {
  productoId: number;
  categoria: ICategoria;
  precio: number;
  nombre: string;
  descripcion: string;
  stock: number;
}

export interface DetallePedidos {
  detallePedidoId: number;
  producto: Productos;
  cantidad: number;
}

export interface DetallePedidosId {
  cantidad: number;
  detallePedidoId: number;
  producto: Productos;
  descripcion: string;
  nombre: string;
  precio: number;
  productoId: number;
  stock: number;
}
