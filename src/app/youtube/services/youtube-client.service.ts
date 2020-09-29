import { Injectable } from '@angular/core';
import {ISearchItem} from '../models/search-item.model';
import response from '../../data';

@Injectable()
export class YoutubeClientService {
  public items: ISearchItem[];
  constructor() {
     this.items = response.items;
  }
}
