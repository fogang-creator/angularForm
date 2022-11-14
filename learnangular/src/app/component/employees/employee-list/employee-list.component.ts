import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  test!: string[];
erreur:string = '';
  displayedColumns:string[] = ['firstname', 'lastname' , 'emailid']

  data =this.employees;

  constructor( private employeeService : EmployeeService) { }

  ngOnInit(): void {
    console.log("hello");
  
    this.employeeService.getEmployeesList().subscribe({
      next:elt=> {this.data = elt},
      error:err=>{this.erreur=err}
    })
this.test=this.data?.map( res=>res.firstName);
console.log(this.test);
    // console.log(this.data);
    // console.log(this.erreur);
   
  }

}
