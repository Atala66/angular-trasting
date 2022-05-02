import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import {FirstViewComponent } from '../components/first-view/first-view.component';
import { MainViewComponent } from './main-view.component';
 



@NgModule({
  declarations: [
	FirstViewComponent,
	MainViewComponent
  ],
  imports: [
	CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [ FirstViewComponent, MainViewComponent]

})

export class MainViewModule { }
