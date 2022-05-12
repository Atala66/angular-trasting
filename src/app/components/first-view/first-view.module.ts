import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DemoContentComponent } from '../demo-content/demo-content.component';


 



@NgModule({
  declarations: [
	DemoContentComponent
  ],
  imports: [
	CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
	
  ],
  providers: [],
  exports: [DemoContentComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class FirstViewModule { }