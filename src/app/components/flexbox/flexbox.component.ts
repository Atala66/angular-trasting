
import { Component, ContentChild, OnInit, ViewChild, ViewChildren } from '@angular/core';
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

	// reusable 
	 public title: string;
	 public message: string;
	 public num_divs: number;

  constructor() { }

  ngOnInit() {
	  this.num_divs = 4;
	  this.content1 = 'Ahora mi texto es otro. A que mola??? ';
	  this.content2 = '';
  }


      public openAlert(title: string, msg?: string) {
		this.alert.title = title;
		this.alert.message = msg;
		this.alert.openAlert();
		
      
	  }


	  public openAlertFromContent() {
		  this.alertCmp.openAlert();
	  }


}
