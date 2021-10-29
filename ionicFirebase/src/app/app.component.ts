import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  constructor(private router:Router) {
    this.initializer();
  }
  initializer() {
    this.router.navigateByUrl("/login"); 
  }
  

}
