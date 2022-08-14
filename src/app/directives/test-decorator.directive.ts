import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appTestDecorator]'
})
export class TestDecoratorDirective implements OnInit {

	@Input() appTestDecorator = '';

	constructor(
		private el: ElementRef
	) { }


	ngOnInit() { }


	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('green');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('red');
	  }

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}



}
