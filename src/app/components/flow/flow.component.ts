import { Component, OnInit } from '@angular/core';
import { FlowService } from './flow.service';

@Component({
	selector: 'app-flow',
	templateUrl: './flow.component.html',
	styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
    public dittoData: any;
     public movies: any; 
	 title: string ="Top 10 Movies" ;


	constructor(
		private flow_Srv: FlowService
	) { }

	ngOnInit() {
	// this.getDitto();
	// console.log('dito::', this.dittoData);
	this.getMovies();

	}





	public getDitto() {
		this.flow_Srv.getDitto().subscribe((response: any) => {
			if(response) {
				this.dittoData  = {
					abilities: response.abilities,
					sprites: response.sprites,
					 game_indices: response.game_indices
				};
				console.log(this.dittoData);
			}
		});

	}



	 public getMovies() {
		 this.flow_Srv.getMovies().subscribe(( response: any ) => {
               if (response) {
				   this. movies = response;
				   console.log(this.movies); 
			   }
		 });
	 }
}
