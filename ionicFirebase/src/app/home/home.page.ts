import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public apprenants: any;
  public profile;
  constructor(private firestore: AngularFirestore,private fireAuth:AngularFireAuth) { }
  ngOnInit() {
    this.firestore.collection("Apprenants")
        .get()
        .subscribe(data => {
          this.apprenants = data.docs.map(doc=>doc.data())          
        },
          err => {
            console.log(err)
          }
        )
    }
  
  
}
