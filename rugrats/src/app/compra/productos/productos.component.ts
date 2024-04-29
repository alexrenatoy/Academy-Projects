import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../carrito.service'; // Importa el servicio de carrito

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  producto1: any = {
    nombre: 'Camisa Slim Fit',
    descripcion: ' Modelo de corte ajustado con cuello inglés, tapeta clásica y canesú con pinzas en la espalda.',
    imagen: '../../../assets/carrito_productos/1420400-483-725.webp'
  };

  producto2: any = {
    nombre: 'Camiseta lyocell Slim Fit',
    descripcion: 'Camiseta en punto pesado de canalé de mezcla de algodón y lyocell con cuello ribeteado fino y bajo recto.',
    imagen: '../../../assets/carrito_productos/1703301-483-725.webp'
  };

  producto3: any = {
    nombre: 'Slim Cargo Jeans',
    descripcion: 'Vaquero cargo en denim de algodón con ligero stretch para una comodidad óptima. ',
    imagen: '../../../assets/carrito_productos/1726041-483-725.webp'
  };

  producto4: any = {
    nombre: 'Vaquero corto Slim',
    descripcion: 'Pantalón corto de cinco bolsillos en denim de algodón con ligero stretch para una comodidad óptima.',
    imagen: '../../../assets/carrito_productos/1729003-483-725.webp'
  };

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto); // Corregí el nombre del método aquí
  }
}
