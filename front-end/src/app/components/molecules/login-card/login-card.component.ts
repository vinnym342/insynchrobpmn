import { Component, OnInit, NgModule } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) { }

  public data:any;

  ngOnInit() {
  }
  onClick(email,password) {
    this._authenticationService.signIn(email,password)
  }
  onSubmit() {
    this._authenticationService.signIn();
  }
  onChange(email,password){
    console.log(event)
  }

}
