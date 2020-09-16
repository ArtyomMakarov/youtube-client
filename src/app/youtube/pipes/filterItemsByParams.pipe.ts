import { Pipe, PipeTransform } from '@angular/core';
import {ISearchItem} from '../models/search-item.model';

@Pipe({
  name: 'filterItemsByParams'
})
export class FilterItemsByParamsPipe implements PipeTransform {

  public transform(items: Array<ISearchItem>,
                   params: {filterParam: string, increaseParam: boolean}): Array<ISearchItem> {
    if (!params || !items) {
      return items;
    }
    if (params.filterParam === 'date') {
      let newItems: Array<ISearchItem>;
      if (params.increaseParam === true) {
          newItems = items.slice().sort((a, b) => {
            const dateA: Date = new Date(a.snippet.publishedAt);
            const dateB: Date = new Date(b.snippet.publishedAt);
            return +dateA - +dateB;
          });
      } else {
          newItems = items.slice().sort((a, b) => {
            const dateA: Date = new Date(a.snippet.publishedAt);
            const dateB: Date = new Date(b.snippet.publishedAt);
            return +dateB - +dateA;
          });
        }
      return newItems;
    }
    if (params.filterParam === 'count of views') {
      let newItems: Array<ISearchItem>;
      if (params.increaseParam === true) {
        newItems = items.slice().sort((a, b) => {
          return +a.statistics.viewCount - +b.statistics.viewCount;
        });
      } else {
          newItems = items.slice().sort((a, b) => {
            return +b.statistics.viewCount - +a.statistics.viewCount;
          });
        }
      return newItems;
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
