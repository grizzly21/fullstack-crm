import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthContainer} from "./auth/auth-container.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRouterModule} from "./app-router.module";
import {HttpClientModule} from "@angular/common/http";
import {SiteModule} from "./site/site.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthContainer,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpClientModule,

    SiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
