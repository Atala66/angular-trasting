import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FirstViewComponent } from './components/first-view/first-view.component';
import { SecondViewComponent } from './components/second-view/second-view.component';
import { LoginComponent } from './components/login/login.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { FlowComponent } from './components/flow/flow.component';


const routes: Routes = [
	// NO SE ENRUTA BARRA DE NAVEGACION MONGRER
	// { path: '', component:  NavigationBarComponent, pathMatch: 'full' },
	{ path: 'login', component:  LoginComponent },
    { path: 'second-view', component:  SecondViewComponent },
	{ path: 'first-view', component:  FirstViewComponent },
	{ path: 'flexbox', component:  FlexboxComponent },
	{ path: 'flow', component:  FlowComponent },
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
