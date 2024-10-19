import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // Other components...
  ],
  imports: [
    BrowserModule, // Ensure this is imported
    CommonModule,
    RouterModule.forRoot([]) // Your routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
