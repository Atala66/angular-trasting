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



	constructor(
		public first_Srv: FirstViewService,
	) { }

	ngOnInit() {
		this.getCatFacts();
		// this.getTransformedData();

	}



	public getCatFacts() {
		this.first_Srv.getCatFacts().subscribe((data: any) => {
			this.catFacts = data;
			this.prepareCatsFacts();
		});

	}

	public prepareCatsFacts() {
		const copy = this.catFacts.map(object => ({ ...object }));
		let newData = [];
		this.catFacts.forEach((cat, index) => {
			newData.push({
				cat: cat,
				title: `Interesting fact number :: ${index + 1}`
			});
		});
		return newData;

	}

}


