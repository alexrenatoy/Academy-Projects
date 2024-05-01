import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
  list=[
      {
      name: 'Juan Pérez',
      phone: '123456789',
      email: 'juan@example.com',
      address: 'Calle Principal 123',
      bankAccount: '1234567890'
    },
     {
      name: 'María García',
      phone: '987654321',
      email: 'maria@example.com',
      address: 'Avenida Central 456',
      bankAccount: '0987654321'
    },
     {
      name: 'Carlos López',
      phone: '555555555',
      email: 'carlos@example.com',
      address: 'Plaza Mayor 789',
      bankAccount: '555544443333'
    },
     {
      name: 'Ana Martínez',
      phone: '777777777',
      email: 'ana@example.com',
      address: 'Paseo del Sol 246',
      bankAccount: '777788881111'
    },
    {
      name: 'Pedro Rodríguez',
      phone: '999999999',
      email: 'pedro@example.com',
      address: 'Avenida Libertad 135',
      bankAccount: '999966667777'
    }
  ]
}
