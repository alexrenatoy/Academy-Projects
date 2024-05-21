import { Injectable } from '@angular/core';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private localStorageKey = 'employees';

  constructor() { }
  registerEmployee(employee: Employees): void {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
  }

  getEmployees(): Employees[] {
    const employeesJson = localStorage.getItem(this.localStorageKey);
    return employeesJson ? JSON.parse(employeesJson) : [];
  }
}
