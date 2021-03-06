import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routingComponents } from './app-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	HttpModule, 
  	AppRoutingModule
  ],
  declarations: [ AppComponent, routingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
