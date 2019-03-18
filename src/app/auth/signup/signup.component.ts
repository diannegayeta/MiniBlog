import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup ({
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
    const email = this.signupForm.value['email'];
    const password = this.signupForm.value['password'];
    this.authService.signupUser(email, password);
  }

}
