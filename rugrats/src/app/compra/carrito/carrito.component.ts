import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../carrito.service'; // Importa el servicio de carrito

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: any[] = []; // Define la propiedad productosEnCarrito

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.obtenerProductosEnCarrito(); // Llama al método para obtener los productos en el carrito al iniciar el componente
  }

  obtenerProductosEnCarrito() {
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito(); // Obtén los productos en el carrito del servicio
  }

  eliminarDelCarrito(producto: any) {
    const index = this.productosEnCarrito.indexOf(producto); // Encuentra el índice del producto en el arreglo
    if (index !== -1) {
      this.carritoService.eliminarProducto(index); // Elimina el producto utilizando su índice
      this.obtenerProductosEnCarrito(); // Actualiza la lista de productos en el carrito
    }
  }

  realizarPago() {
    this.carritoService.vaciarCarrito();
    this.obtenerProductosEnCarrito(); // Actualiza la lista de productos en el carrito
    alert('Pago realizado correctamente. ¡Gracias por su compra!');
  }
}
