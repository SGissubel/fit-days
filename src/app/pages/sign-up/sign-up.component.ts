import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;
  formControls: any;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      verifyEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordVerify: new FormControl('', [Validators.required])
    });

    this.formControls = this.formGroup.controls;
  }

  getErrorMessage() {
// 
  }

  signUp() {

  }
}
