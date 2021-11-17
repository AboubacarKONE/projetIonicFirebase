import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus = [
    { title: "Home", url: "/menu/home", icon: "home-outline" },
    { title: "profile", url: "/menu/profile", icon: "woman-outline" },
    { title: "Passeword", url: "/menu/reset-password", icon: "woman-outline" },
    { title: "Logout", url: "Logout", icon: "log-out-outline" }
  ]
  constructor(private route: Router, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  onMenu(a) {
    if (a.url == 'Logout') {
      this.fireAuth.signOut().then(() => {
        // Sign-out successful.  
        this.route.navigateByUrl("/login");
      }).catch((error) => {
        // An error happened.
      });
    }
    else {
      this.route.navigateByUrl(a.url);
    }
  }

}
