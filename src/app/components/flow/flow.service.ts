import { Injectable } from '@angular/core';

import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';


@Injectable()

export class FlowService {
	public BASE_URL = 'https://pokeapi.co/api/v2/';
	public MOCK_URL_MOVIES = '../../../assets/movies_mock.json';

	constructor(
		private http: HttpClient,
	) { }

	// Read
	public getDitto() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
		});
		// const requestOptions = { headers: new Headers(headerDict) };
		return this.http.get(`${this.BASE_URL}pokemon/ditto`);


	}


	public getMovies() {
		return this.http.get(`${this.MOCK_URL_MOVIES}`);

	}

	// Update


	// Delete


	// Handle errors
	public errors(error: HttpErrorResponse) {
		console.log(error);
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		}

		return errorMessage;
	}


}

