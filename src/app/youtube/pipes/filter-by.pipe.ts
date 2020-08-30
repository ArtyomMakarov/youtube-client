import { Pipe, PipeTransform } from '@angular/core';
import {ISearchItem} from '../models/search-item.model';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  public transform(items: Array<ISearchItem>,
                   params: {filterParam: string, increaseParam: boolean}): Array<ISearchItem> {
    if (!params || !items) {
      return items;
    }
    if (params.filterParam === 'date') {
      params.increaseParam === true ? items.sort((a, b) => {
        const dateA: Date = new Date(a.snippet.publishedAt);
        const dateB: Date = new Date(b.snippet.publishedAt);
        return +dateA - +dateB;
      }) : items.sort((a, b) => {
        const dateA: Date = new Date(a.snippet.publishedAt);
        const dateB: Date = new Date(b.snippet.publishedAt);
        return +dateB - +dateA;
      });
      return items;
    }
    if (params.filterParam === 'count of views') {
      params.increaseParam === true ? items.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      }) : items.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
      return items;
    }
    if (params.filterParam !== 'date' && params.filterParam !== 'count of views') {
        const regExp: RegExp = new RegExp(params.filterParam, 'ig');
        const newItems: Array<ISearchItem> = items.filter((item) => {
          if (regExp.test(item.snippet.title)) {
           return item;
          }
        });
        return newItems;
    }
  }
}
