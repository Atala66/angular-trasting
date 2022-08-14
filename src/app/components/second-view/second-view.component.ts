import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit, AfterViewInit {

/**
 // tslint:disable-next-line:max-line-length
 * DOC: https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/
 */
	public shouldSayHello: boolean;
	public shouldSayGoodbye: boolean;
	public title: string = 'NG-TEMPLATE';
	 public goHome: true;
	 public color = '';
	 public people = [
        {nombre: 'Lucy', apellidos: 'Swan', edad : 15, isAlive: true },
		{nombre: 'Mark', apellidos: 'Renton', edad : 40, isAlive: false },
		{nombre: 'John', apellidos: 'Doe', edad : 23, isAlive: true },
		{nombre: 'Jane', apellidos: 'Doe', edad : 25, isAlive: true }
	 ];

  constructor(
  ) { }

  ngOnInit() {
	  this.color = 'blue';
	  this.loopPeople();
	  this.filterObservable();
	  this.mapObservable();
	// this.createObservablewithOf();
	// this.createObservablewithFrom();
    this.shouldSayHello = true;
	this.shouldSayGoodbye = true;
  }

  ngAfterViewInit () { }


  public toogleNgTemplate() {
	this.shouldSayHello = !this.shouldSayHello;
  }


public createObservablewithOf() {
	const arr = [1, 2, 3, 4, 5];
    const $arr = of(arr);
	$arr.subscribe((values) => console.log(`Emmited values`, values));
}

public createObservablewithFrom() {
	const arr = [1, 2, 3, 4, 5];
    const $arr = from(arr);
	$arr.subscribe((values) => console.log(`Emmited values`, values));
}


public filterObservable() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const $arr = from(arr);
	$arr
	.pipe(
	 filter((value) => (value >= 4)))
	.subscribe((value) => console.log(`Emmited values`, value));

}


public mapObservable() {
	const data = [1, 2, 3, 4, 5];
	const $data = from(data);
	$data.pipe(map((number: any) => number * 2)).subscribe((number) => console.log(`Mapped numbers::`, number));
}


 public loopPeople() {
	 const persona1 = this.people[0];
	 console.log(persona1);
	 // recorre propiedades de un objeto
	for (const prop in persona1) {
         // tslint:disable-next-line:forin
		 console.log(`${prop}: ${persona1[prop]}`);

	 }
 }



}
