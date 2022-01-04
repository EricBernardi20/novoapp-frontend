import { BodyComponent } from './body-cards/body.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';

import { SearchComponent } from './search/search.component';
import { BodyAddsComponent } from './body-adds/body-adds.component';
import { FooterComponent } from './footer/footer.component';
import { ModalAddsComponent } from './modal-adds/modal-adds.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LoginComponent,
    SearchComponent,
    BodyComponent,
    BodyAddsComponent,
    FooterComponent,
    ModalAddsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
