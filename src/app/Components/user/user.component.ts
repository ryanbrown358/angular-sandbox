import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    
})

export class UserComponenet implements OnInit{
    //These are properties
    user: User;

    //methods
    constructor(){
        // you can pass your own methods in the constructor 
       
      
    }

    ngOnInit(){
        this.user = {
            firstName: "Ryan",
            lastName: "Brown",
            age: 30,
            address:{
                street: "50 main st",
                city: "boston",
                state: "MA"
            }
        }
    }
   
   
    
}

