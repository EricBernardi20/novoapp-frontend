import { AuthService } from './login/services/auth.service';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { HttpClientModule } from '@angular/common/http'
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
import { ModalAddsPipe } from './modal-adds/modal-adds.pipe';
import { FormsModule } from '@angular/forms'
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
    ModalAddsPipe,
    ModalAddsComponent,
    RegisterComponent,
    NewsComponent,
    ModalAddUserComponent,
    
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
