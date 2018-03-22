import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/organisms/login-page/login-page.component';
import { LoginCardComponent } from './components/molecules/login-card/login-card.component';
import { MatCard } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'
// import { Globals } from './globals'
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/templates/home-page/home-page.component';

const appRoutes: Routes = false ? [ // false = globalVarToken or smth
  { path: '', component: HomePageComponent},
] : [
  { path: '**', component: LoginPageComponent},
  // { path: '**', component: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginCardComponent,
    MatCard,
    HomePageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
    // Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
