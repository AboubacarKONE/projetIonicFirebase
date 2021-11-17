import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private fire: AngularFirestore) { }

  ngOnInit() {
  }
  onChange(c) {
    this.fireAuth.onAuthStateChanged((user) => {
      if (user) {
        var users = user.email;
        //this.getByEmail(users)
        // ...
      } else {
        console.log("user is not connect");

      }
    });
  }

}
