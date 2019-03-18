import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mini-blog';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB9B5N5Sa6ygx2EYA5W5pCW8WmMeWwbFgM",
      authDomain: "ng-http-9356b.firebaseapp.com",
    })
  }

}
