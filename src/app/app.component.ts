import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
@ViewChild('footer') footer: ElementRef;


	constructor(
		public cdRef: ChangeDetectorRef
	) { }

ngOnInit(): void {

 }

 ngAfterContentInit(): void {
	this.cdRef.detectChanges();
	
	
	}


 ngAfterViewInit(): void {
	this.footer.nativeElement.value = 'Soy el footer';
	console.log(this.footer);
 }



}
