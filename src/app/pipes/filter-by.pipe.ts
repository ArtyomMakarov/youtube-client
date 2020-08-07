import { Pipe, PipeTransform } from '@angular/core';
import {ISearchItem} from '../models/search-item.model';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: Array<ISearchItem>, params: {param1: string, param2: boolean}): Array<ISearchItem> {
    if (params.param1 === 'date') {
        // this.sortItems(items, params);
      params.param2 === true ? items.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt);
        const dateB = new Date(b.snippet.publishedAt);
        return +dateA - +dateB;
      }) : items.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt);
        const dateB = new Date(b.snippet.publishedAt);
        return +dateB - +dateA;
      });
      return items;
    }
    if (params.param1 === 'count of views') {
      params.param2 === true ? items.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      }) : items.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
      return items;
    }
    if (params.param1 !== 'date' && params.param1 !== 'count of views') {
        const regExp = new RegExp(params.param1, 'ig');
        const newItems = items.filter((item) => {
          if (regExp.test(item.snippet.title)) {
           return item;
          }
        });
        return newItems;
    }
  }
}
