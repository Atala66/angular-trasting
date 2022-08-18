import { Component, OnInit } from '@angular/core';
import { FlowService } from '../../services/flow.service';

@Component({
	selector: 'app-flow',
	templateUrl: './flow.component.html',
	styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
	public dittoData: any;
	public dittoSprites: any;
	public movies: any;
	public pokemonImages: any;
	title: string = "Top 10 Movies";


	constructor(
		private flow_Srv: FlowService
	) { }

	ngOnInit() {
		this.getDitto();
		this.getMovies();

	}





	public getDitto() {
		this.flow_Srv.getDitto().subscribe((response: any) => {
			if (response) {
				this.dittoData = {
					abilities: response.abilities,
					sprites: response.sprites,
					game_indices: response.game_indices
				};
			}
		});

	}


	private getDittoSprites() {
		const dittoData = { ...this.dittoData };
		// tslint:disable-next-line:forin
		const arr = [];
		// tslint:disable-next-line:forin
		for (const image in dittoData.sprites) {
			arr.push(`${image} 1:: ${dittoData.sprites[image]}`);
		}
	return arr;
	}


	public getMovies() {
		this.flow_Srv.getMovies().subscribe((response: any) => {
			if (response) {
				this.movies = response;
			}
		});
	}

	public getPokemons() {
		this.flow_Srv.getPokemons().subscribe((response: any) => {
			if (response) {
				this.pokemonImages = response;
				console.log( this.pokemonImages);
			}
		});
	}
}
