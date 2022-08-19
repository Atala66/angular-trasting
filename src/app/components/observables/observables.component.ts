import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'app/services/people.service';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {


	constructor(
		private peopleSrv: PeopleService
	) { }

	ngOnInit() {

		this.getPeople();
		//  this.createObservablewithOf();
		//  this.createObservablewithFrom();
		// this.filterObservable();
		// this.mapObservable();
	}


	public getPeople() {
		this.peopleSrv.getPeople().subscribe((data: any) => {
			if (data) {  console.log(data);  }
		});

	}

	public createObservablewithOf() {
		const arr = [1, 2, 3, 4, 5];
		const $arr = of(arr);
		$arr.subscribe((values) => console.log(`Emmited values all together with of`, values));
	}

	public createObservablewithFrom() {
		const arr = [1, 2, 3, 4, 5];
		const $arr = from(arr);
		$arr.subscribe((values) => console.log(`Emmited values one by one with from`, values));
	}

	public filterObservable() {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const $arr = from(arr);
		$arr
			.pipe(
			filter((value) => (value >= 4)))
			.subscribe((value) => console.log(`Filtered values`, value));

	}

	public mapObservable() {
		const data = [1, 2, 3, 4, 5];
		const $data = from(data);
		$data.pipe(map((number: any) => number * 2)).subscribe((number) => console.log(`Mapped numbers::`, number));
	}





}


