import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit {

/**
 // tslint:disable-next-line:max-line-length
 * DOC: https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/
 
 */

	public shouldSayHello: boolean;
	public title: string = 'NG-TEMPLATE';
	 public goHome: true;

  constructor() { }

  ngOnInit() {
    this.shouldSayHello = true;
	// this.home = true;
  }



  public toogleNgTemplate() {
	this.shouldSayHello = !this.shouldSayHello;
  }

}
