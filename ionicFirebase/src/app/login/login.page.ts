import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private fireAuth:AngularFireAuth,private route:Router) { }

  ngOnInit() {
  }
  onLogin(info){
    return this.fireAuth.signInWithEmailAndPassword(info.email, info.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      if(user){
        this.route.navigateByUrl("/menu/home")
      }
          // ...
    })
    .catch((error) => {
      alert(error.code);
      alert(error.message);
    });
  }

}

