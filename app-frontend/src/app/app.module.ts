import { AuthService } from './login/auth.service';
import { ModalAddsComponent } from './modal-adds/modal-adds.component';
import { BodyComponent } from './body-cards/body.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { BodyAddsComponent } from './body-adds/body-adds.component';
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
import { FormsModule }  from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    SearchComponent,
    FooterComponent,
    BodyAddsComponent,
    RegisterComponent,
    HomeComponent,
    BodyComponent,
    ModalAddsComponent,
    ModalAddsPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
