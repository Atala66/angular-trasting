import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss']
})
export class SimpleAlertComponent implements OnInit {
	@Input() title: string;
	@Input() message: string;
	 isVisible: boolean;


  constructor() { }

  ngOnInit() { }


  public openAlert() {
	  this.isVisible = true;
  }

  
  public dismiss() {
	this.isVisible = false;
}


}
