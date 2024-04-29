import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productosEnCarrito: any[] = [];

  agregarProducto(producto: any) {
    this.productosEnCarrito.push(producto);
  }

  eliminarProducto(index: number) {
    this.productosEnCarrito.splice(index, 1);
  }

  obtenerProductosEnCarrito() {
    return this.productosEnCarrito;
  }

  vaciarCarrito() {
    this.productosEnCarrito = [];
  }
}
