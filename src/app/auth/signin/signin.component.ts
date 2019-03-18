import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    }) 

    this.authService.errorMessage.subscribe(
      (errorMessage: string) => {
        this.errorMessage = errorMessage;
      }
    )
  }

  onSubmit() {
    const email = this.signinForm.value['email'];
    const password = this.signinForm.value['password'];
    this.authService.signinUser(email, password);
  }

}
