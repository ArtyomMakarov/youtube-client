import {ISearchItem} from './search-item.model';
export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: {[key: string]: number};
  items: ISearchItem[];
}
