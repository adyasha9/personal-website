import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot([]) 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
