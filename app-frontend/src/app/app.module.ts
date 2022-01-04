
import { RegisterComponent } from './register/register.component';
import { BodyAddsComponent } from './body-adds/body-adds.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SearchComponent } from './search/search.component';
import { ModalAddsComponent } from './modal-adds/modal-adds.component';
import { BodyComponent } from './body-cards/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    SearchComponent,
    FooterComponent,
    BodyAddsComponent,
    FooterComponent,
    ModalAddsComponent,
    BodyComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
