import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewModule } from './main-view/main-view.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SecondViewComponent } from './components/second-view/second-view.component';
import { FirstViewService } from './components/first-view/first-view-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { FirstViewModule } from './components/first-view/first-view.module';
import { SimpleAlertComponent } from './components/simple-alert/simple-alert.component';
import { TabComponent } from './components/tab/tab.component';
import { FlowComponent } from './components/flow/flow.component';
import { FlowService } from './components/flow/flow.service';
import { TestDecoratorDirective } from './directives/test-decorator.directive';
import { TestPipe } from './pipes/testpipe.pipe';



@NgModule({
  declarations: [
	 AppComponent,
	 NavigationBarComponent,
	 SecondViewComponent,
	 LoginComponent,
	 FooterComponent,
	 FlexboxComponent,
	 SimpleAlertComponent,
	 TabComponent,
	 FlowComponent,
	 TestDecoratorDirective,
	 TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule,
	HttpClientModule,
	MainViewModule,
	AppRoutingModule,
	FirstViewModule

  ],
  exports: [
	TestDecoratorDirective 
  ],
  providers: [
	HttpClient,
	FirstViewService,
	FlowService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
