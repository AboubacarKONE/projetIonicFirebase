import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
 public data;
  constructor(private fireAuth: AngularFireAuth, private fire: AngularFirestore) { }

  ngOnInit() {
  }
  onChange(c) {
    this.fireAuth.onAuthStateChanged((user) => {
      if (c==null) {
         user.updatePassword(c.newPassword).then(() => {         
          // Update successful.
          alert("mot de passe modifié avec succès")
        }).catch((error) => {
          // An error ocurred
          // ...
          console.log(error);
          
        });
        //this.getByEmail(users)
        // ...
        // 
      } else {
       alert("veuillez renseigner les champs")

      }
    });
  }
  getByPassword(userPassword) {
    this.fire.collection("Apprenants", ref => ref.where("email", "==", userPassword))
  }


  


}

