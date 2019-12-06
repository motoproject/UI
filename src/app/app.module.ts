import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttp } from './customHttp';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MenuHeaderModule } from './menu-header/menu-header.module';
import { numbersOnlyDirective } from './CustomDirective/digitsonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    numbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollDispatchModule,
    MenuHeaderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
