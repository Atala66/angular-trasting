import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

	public content1: string;
	public content2: string;

  constructor() { }

  ngOnInit() {
	  this.content1 = 'Soy el contenido proyectado en la div verde';
	  this.content2 = 'Soy el contenido proyectado en la div azul';
  }

}
