import {ISearchItem} from './search-item.model';
export interface ISearchResponse {
  pageInfo: {[key: string]: number};
  items: ISearchItem[];
}
