import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../tab/tab.interface';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
	public navigation: Tab[] = [];

	constructor(
		private router: Router
	) { }


	ngOnInit() {
		this.addTab({ title: 'Home', route: 'login' });
		this.addTab({ title: 'First View', route: 'first-view' });
		this.addTab({ title: 'Second View', route: 'second-view' });
		this.addTab({ title: 'Flexbox', route: 'flexbox' });
		this.addTab({ title: 'Control Flow', route: 'flow' });
		// this.addTab({ title: 'Observables', route: 'observables' });
		this.addTab({ title: 'Shopping cart', route: 'shopping' });
	}


	public addTab(tab: Tab) {
		this.navigation.push(tab);
	}



	public navigate(route) {
		this.router.navigate([route]);

	}



}






