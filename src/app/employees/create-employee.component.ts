import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";

import { Employee } from '../models/employee.model';
import { Department } from "../models/department.model";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>
  employeeModel = new Employee;
  departments: Array<Department> = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ]

  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      isAnimated: true,
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    })
  }

  ngOnInit(): void {
    this.employeeModel.department = '';
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
