import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { AuthService } from './login/auth.service';
import { ModalAddsComponent } from './modal-adds/modal-adds.component';
import { BodyCardsComponent } from './body-cards/body.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './News/body-adds.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    SearchComponent,
    FooterComponent,
    HomeComponent,
    BodyCardsComponent,
    ModalAddsComponent,
    RegisterComponent,
    NewsComponent,
    ModalAddUserComponent
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
