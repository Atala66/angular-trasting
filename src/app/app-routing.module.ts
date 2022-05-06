import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FirstViewComponent } from './components/first-view/first-view.component';
import { SecondViewComponent } from './components/second-view/second-view.component';


const routes: Routes = [
	// { path: '', component:  NavigationBarComponent, pathMatch: 'full' },
    { path: 'second-view', component:  SecondViewComponent },
	{ path: 'first-view', component:  FirstViewComponent },
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule  ]
})
export class AppRoutingModule { }
