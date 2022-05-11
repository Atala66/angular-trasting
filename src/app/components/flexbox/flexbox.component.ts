import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

	public content1: string;
	public content2: string;

  constructor() { }

  ngOnInit() {
	  this.content1 = 'Ahora mi texto es otro ';
	  this.content2 = 'A que mola???';
  }

}
