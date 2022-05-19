import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';


@Injectable()

export class FlowService  {
	public URL = 'https://whiskyhunter.net/api/_auction_data/catawiki';

	 public FISH_FACTS = 'https://www.fishwatch.gov/api/species';
	// public headers = new HttpHeaders().set('Content-Type', 'application/json');



	constructor(
		private http: HttpClient,
		
	) { }

	// Create


	// Read

	   public getShiftFacts() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:4200/flow',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
		});
		// const requestOptions = { headers: new Headers(headerDict) };
	    return this.http.get(this.FISH_FACTS, {headers: headers}); // requestOptions
	}

	// Update


	// Delete


	// Handle errors
 public errors(error: HttpErrorResponse) {
	 console.log(error);
     let errorMessage = '';
	 if(error.error instanceof ErrorEvent) {
		 errorMessage = error.error.message;
	 }

	 return errorMessage;
 }


}

