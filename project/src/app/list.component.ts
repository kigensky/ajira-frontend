import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Employees } from './employees.interface';

@Component({
  selector: 'app-list',
  template: `
  <div class="body" style="background-image: url(../assets/bc.jpeg)">  
    <div style="text-align:center">
      <h1>
        Employee
      </h1>
    </div>
    
  </div>`
})
export class ListComponent implements OnInit {

  items: Employees[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getEmployees().subscribe(
      (items: Employees[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(employeesName: string, employeesDepartment: number ) {
    this.api. Employees(employeesName, employeesDepartment).employees(
      (name: Employees) => this.items.push(name),
      (error: any) => this.error = error
    );
  }

  delete(id: number) {
    this.api.deleteEmployees(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      ),
      (error: any) => this.error = error
    );
  }
}
function employeesName(employeesName: any, employeeDepartment: any) {
  throw new Error('Function not implemented.');
}

