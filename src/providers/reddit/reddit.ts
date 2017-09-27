import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RedditProvider {
  settings: any;
  loading: boolean = false;
  posts:any = [];
  subreddit:string = 'gifts';
  page: number = 1;
  perPage: number = 15;
  after: string;
  stopIndex: number;
  sort: string = 'hot';
  moreCount: number = 0;
  

  constructor(public http: Http) {
  }

  fetchData(): void {

  }

}
