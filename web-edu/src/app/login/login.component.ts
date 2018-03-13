import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Messages} from "../messages";

@Component({
               selector: 'loginForm', templateUrl: './login.component.html', styleUrls: ['./login.component.css']

           })
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loginFormBuilder: FormBuilder;
    errorMessage: string;

    constructor(loginFormBuilder: FormBuilder) {
        this.loginFormBuilder = loginFormBuilder;
    }

    ngOnInit() {
        this.loginForm = this.loginFormBuilder.group({
                                                         emailId: ['', [Validators.required, Validators.email]], password: ['', [Validators.required]]
                                                     });

    }

    /**
     * Login Form validation
     */
    validateForm() {
        this.errorMessage = null;
        //User Name Blank
        if (this.loginForm.get("emailId").touched && this.loginForm.get("emailId").hasError('required')) {
            this.errorMessage = Messages.BLANK_EMAIL;
            return;
        }
        //Invalid emailId
        if (this.loginForm.get("emailId").touched && this.loginForm.get("emailId").hasError('email')) {
            this.errorMessage = Messages.INVALID_EMAIL;
            return;
        }

        //Password Blank
        if (this.loginForm.get("password").touched && this.loginForm.get("password").hasError('required')) {
            this.errorMessage = Messages.BLANK_PASSWORD;
            return;
        }

    }
}