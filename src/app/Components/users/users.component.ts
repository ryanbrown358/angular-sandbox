import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {
    // the constructor is used more for dependancy injection to bring in services and inject it here

  }

  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: "Crystal",
          lastName: "Sand-Box",
          age: 30,
          address: {
            street: "50 main st",
            city: "boston",
            state: "MA"
          },
          image: 'http://lorempixel.com/500/500/people/1'
        },
        {
          firstName: "Leona",
          lastName: "Sand-Box",
          age: 26,
          address: {
            street: '11234 W neverending Lane',
            city: 'Everwood', 
            state: 'Forest'
          },
          image: 'http://lorempixel.com/500/500/people/2'
        },
        {
          firstName: 'Sababo',
          lastName: 'Sand-Box',
          age: 30,
          address: {
            street: "1123 W nevber lane",
            city: "boston",
            state: "TX"
          }, image: 'http://lorempixel.com/500/500/people/3'
        },

      ];
      this.loaded = true;
    // }, 2000);

    // this is is what you would use if you are going to be using an AJAX call/Request 


    // this.addUser({
    //   firstName: "Ryan",
    //   lastName: "BRown",

    // });

  }
  addUser(user: User) {
    this.users.push(user)
  }


}
