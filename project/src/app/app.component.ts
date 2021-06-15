import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    ...

    AppRoutingModule,
  ],
  ...
})
export class AppModule { }

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}