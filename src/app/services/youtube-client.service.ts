import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import {ISearchItem} from '../models/search-item.model';
import response from '../data';

@Injectable()
export class YoutubeClientService {
  public items: ISearchItem[];
  constructor() {
     this.items = response.items;
  }

  // getObservable(): Observable<Array<ISearchItem>> {
  //   return  this.http
  //     .get('http://localhost:3000/items') as Observable<Array<ISearchItem>>;
  // }

}
