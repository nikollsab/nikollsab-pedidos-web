export interface Carrito {
  cantidad: number;
  categoria: ICategoria;
  descripcion: string;
  nombre: string;
  precio: number;
  productoId: number;
  stock: number;
}

export interface ICategoria {
  categoriaId: number;
  nombre: string;
}
