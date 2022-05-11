import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import {FirstViewComponent } from '../components/first-view/first-view.component';
import { MainViewComponent } from './main-view.component';
import { DemoContentComponent } from 'app/components/demo-content/demo-content.component';
import { FirstViewModule } from 'app/components/first-view/first-view.module';
 



@NgModule({
  declarations: [
	FirstViewComponent,
	MainViewComponent

  ],
  imports: [
	CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
	FirstViewModule
  ],
  providers: [],
})

export class MainViewModule { }
