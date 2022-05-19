import { Injectable } from '@angular/core'

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';


@Injectable()

export class FirstViewService  {
	public BASE_URL = 'https://cat-fact.herokuapp.com';
	public UR_CAT_FACTS: string ;
	public headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(
		private http: HttpClient,
		
	) { 
		this. UR_CAT_FACTS = `${this.BASE_URL}/facts`;
	 }

	// Create


	// Read

	   public getCatFacts() {
		return this.http.get(`${this.UR_CAT_FACTS}`);
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

