import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
  employeeForm: FormGroup
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
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears : new FormControl(),
        proficiency: new FormControl()
      }),
      gender: new FormControl(),
      phoneNumber: new FormControl(),
      contactPreference: new FormControl(),
      dateOfBirth: new FormControl(),
      department: new FormControl(),
      isActive: new FormControl(),
      photoPath: new FormControl()
    });
  }

  saveEmployee(): void {
    console.log(this.employeeForm.value)

    console.log(this.employeeForm.controls.fullName.touched)
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
