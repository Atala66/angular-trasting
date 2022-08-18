import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit {

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

	 public numTest: number = 4;

  constructor(
  ) { }

  ngOnInit() {
	this.color = 'blue';
	this.loopPeople();
    this.shouldSayHello = true;
	this.shouldSayGoodbye = true;
  }



  public toogleNgTemplate() {
	this.shouldSayHello = !this.shouldSayHello;
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
