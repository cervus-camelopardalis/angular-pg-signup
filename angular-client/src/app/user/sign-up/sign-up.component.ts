import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;

  formSignUp = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  baseUrl: string = 'http://localhost:5000/users'; /* "http://localhost:5000/users" is set in server.js file */

  /* Properties to bind */
  emailFromTheForm: string = '';
  passwordFromTheForm: string = '';
  
  /* Take data from the form and create a new user */
  onSubmitSignUp() {
    this.emailFromTheForm = this.formSignUp.value.email; /* Get email value from the sign-up.component.html */
    this.passwordFromTheForm = this.formSignUp.value.password; /* Get password value from the sign-up.component.html */

    fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.emailFromTheForm, /* "email" is the first column in the table "users" of the database "auth" */
        password: this.passwordFromTheForm /* "password" is the second column in the table "users" of the database "auth" */
      })
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
