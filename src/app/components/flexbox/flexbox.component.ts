import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { SimpleAlertComponent } from '../simple-alert/simple-alert.component';


@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {
    @ViewChild ('alert') alert: SimpleAlertComponent;
	@ContentChild(SimpleAlertComponent) alertCmp: SimpleAlertComponent;
	public content1: string;
	public content2: string;

  constructor() { }

  ngOnInit() {
	  this.content1 = 'Ahora mi texto es otro. A que mola??? ';
	  this.content2 = '';
  }


      public openAlert() {
		  this.alert.openAlert();
	  }


	  public openAlertFromContent() {
		  this.alertCmp.openAlert();
	  }


}
