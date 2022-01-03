import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
<<<<<<< HEAD

=======
import { SearchComponent } from './search/search.component';
import { HeadLoginComponent } from './login/headLogin/head-login.component';
>>>>>>> 1da115ee4da81f976792199f508bec1e3a31517c


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
<<<<<<< HEAD
    
=======
    SearchComponent,
    HeadLoginComponent
>>>>>>> 1da115ee4da81f976792199f508bec1e3a31517c
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
