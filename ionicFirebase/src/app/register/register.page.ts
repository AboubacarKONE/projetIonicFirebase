import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private firestore:AngularFirestore,private route:Router,private fireAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  onRegister(valeur){
      this.enregistrer(valeur)
      return this.route.navigateByUrl('/login');      
  }
  enregistrer(user){
    this.firestore.collection("Apprenants").doc(user.imdb).set(user)
      .then(()=>{
        this.authenticate(user)
        alert("document enregistrer avec succes")}
        ).catch(error=>{
          console.error("erreur ecrit document:",error)
        })
  }
  authenticate(u){
    this.fireAuth.createUserWithEmailAndPassword(u.email, u.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
  }
}
