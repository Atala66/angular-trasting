import { Component, OnInit } from '@angular/core';
import { FlowService } from './flow.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
public fishes : any= [] = [];


  constructor(
	  private flow_Srv: FlowService
  ) { }

  ngOnInit() {
	  this.getFishes();
  }





  public getFishes () {
      this.fishes = this.flow_Srv.getShiftFacts().subscribe(( response: any ) => {
		  if(response) {
			  console.log(response);
		  }
	  });
  }

}
