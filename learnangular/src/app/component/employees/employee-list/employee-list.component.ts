import { Employee } from '../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor( private employeeService : EmployeeService) { }

  ngOnInit(): void {
    console.log("hello");
  
    this.employeeService.getEmployeesList().subscribe(data=>{
      console.log(data);
      this.employees = data;
      console.log(this.employees);
    })
   
  }

}
