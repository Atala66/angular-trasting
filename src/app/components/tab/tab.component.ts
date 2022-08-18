import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
	@Input() route: string;
	@Output() onClick: EventEmitter<any> =  new EventEmitter<void>();



  constructor() { }

  ngOnInit() { }


  public goToRoute() {
	this.onClick.emit(this.route);
  }


}
