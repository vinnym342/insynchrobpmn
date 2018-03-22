import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginI, RegisterI } from './authentication'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class AuthenticationService {

  public token: string;
  private this._url: string = "http://localhost:7000";

  constructor(private http: HttpClient) { }
  test(){
    console.log("haiiiiii")
  }

  register(){
    return "Hai"
  }

  signIn(email,password) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    this.http.post(this._url + "/auth",{
      email: email,
      password: password
    })
    .subscribe(
      res => {
        console.log(res);
        this.setToken()
      },
      err => {
        this.errorHandler(err)
      }
    );
  }
  setToken(token){
    this.token = token;
    return "Hai"
  }
  signOut(){
    this.token = null;
    return "Hai"
  }
  errorHandler(err) {
    console.log(err)
  }
}
