
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirstViewService } from './first-view-service';




@Component({
	selector: 'app-first-view',
	templateUrl: './first-view.component.html',
	styleUrls: ['./first-view.component.scss'],
	providers: [FirstViewService]
})
export class FirstViewComponent implements OnInit {
	public catFacts: Array<any>;
	public newCatsData:  Array<any>;
	public content1: string;
     public content2: string;



	constructor(
		public first_Srv: FirstViewService,
	) { }

	ngOnInit() {
		this.getCatFacts();
		this.content1 = 'Soy el contenido proyectado en la div verde';
		this.content2 = 'Soy el contenido proyectado en la div azul';
		

	}

	public getCatFacts() {
		this.first_Srv.getCatFacts().subscribe((data: any) => {
			this.catFacts = data;
			this.newCatsData = this.prepareCatsFacts();
		});

	}

	public prepareCatsFacts() {
	 const copy = this.catFacts.map(object => ({ ...object }));
		let data = [];
		this.catFacts.forEach((cat, index) => {
			cat.title = `Interesting fact number : ${index + 1}`;
			data.push({
				cat: cat
			});
		});
       return data;
	}



	// public handleError() {
	// 	this.first_Srv.errors();
	// 	console.log();
	// }

}


