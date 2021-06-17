import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";

import { Employee } from '../models/employee.model';
import { Department } from "../models/department.model";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>
  departments: Array<Department> = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ]

  constructor(private formBuilder: FormBuilder) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      isAnimated: true,
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    })
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)] ],
      email:[''],
      skills: this.formBuilder.group({
        skillName: [''],
        experienceInYears : [''],
        proficiency: ['']
      }),
      gender: [''],
      phoneNumber: [''],
      contactPreference: [''],
      dateOfBirth: [''],
      department: [''],
      isActive: [''],
      photoPath:['']
    });
  }

  loadDefaultValues(): void {
    this.employeeForm.setValue({
      fullName: 'Alfred James',
      email: 'alfred@gmail.com',
      skills: {
        skillName: 'Java',
        experienceInYears : 3,
        proficiency: 'Advanced'
      },
      gender: 'Male',
      phoneNumber: '070849500433',
      contactPreference: 'Email',
      dateOfBirth: '',
      department: '',
      isActive: true,
      photoPath: ''

    })
  }

  saveEmployee(): void {
    console.log(this.employeeForm.value)

    console.log(this.employeeForm.controls.fullName.touched)
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
