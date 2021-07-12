import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesign } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
 declarations: [
   AppComponent,
   LoginComponent,
   RegisterComponent,
   ForgotComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   AngularFireModule.initializeApp(environment.firebase),
   MaterialDesign,
   HttpClientModule,
   FormsModule
 ],
 providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
 bootstrap: [AppComponent]
})
export class AppModule { }

