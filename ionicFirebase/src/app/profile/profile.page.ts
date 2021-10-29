import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile;

  constructor(private fireAuth: AngularFireAuth, private fire: AngularFirestore) { }

  ngOnInit() {
    this.fireAuth.onAuthStateChanged((user) => {
      if (user) {
        var users = user.email;
        this.getByEmail(users)
        // ...
      } else {
        console.log("user is not connect");

      }
    });

  }
  getByEmail(userEmail) {
    this.fire.collection("Apprenants", ref => ref.where("email", "==", userEmail))
      .get()
      .subscribe(data => {
        this.profile = data.docs.map(doc => doc.data())
        console.log(this.profile)
        // data.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        // });
      },
        err => {
          console.log(err)
        }
      )
  }


}
