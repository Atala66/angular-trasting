import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
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



	constructor(
		public first_Srv: FirstViewService,
	) { }

	ngOnInit() {
		this.getCatFacts();
		

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

}


