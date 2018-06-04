import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponenet } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponenet,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
