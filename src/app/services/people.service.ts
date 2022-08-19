import { Injectable } from '@angular/core';
import {
	HttpClient
} from '@angular/common/http';

@Injectable()
export class PeopleService {
	public MOCK_URL_PEOPLE = '../../../assets/mocks/people_mock.json';

  constructor(
	private http: HttpClient,

  ) { }


     public getPeople() {
		return this.http.get(`${this.MOCK_URL_PEOPLE}`);
	 }

}
