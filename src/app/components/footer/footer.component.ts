import { AfterContentInit, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
     public footerTitle: string;

  constructor() { }



ngOnInit(): void {
  this.footerTitle = 'Footer';
}

  public sayHellofromFooter() {
	  console.log('hello from footer!!!');
  }



}
