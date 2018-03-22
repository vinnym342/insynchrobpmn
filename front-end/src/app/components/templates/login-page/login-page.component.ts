import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LoginCardComponent } from '../../molecules/login-card/login-card.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
@NgModule({
  declarations: [
    LoginCardComponent,
  ],
  imports: [
    LoginCardComponent,
  ],
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
