import { Injectable } from '@angular/core';
import {ISearchItem} from '../models/search-item.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISearchResponse} from '../models/search-response.model';
import { concatMap } from 'rxjs/operators';
import { ConfigService} from '../../shared/services/config.service';

@Injectable()
export class YoutubeHTTPService {
  private key: string;
  public items: ISearchItem[];

  constructor(private http1: HttpClient, private http2: HttpClient,
              configService: ConfigService) {
    this.key = configService.getKey;
  }

  private loadItemsResponse(): Observable<ISearchResponse> {
    let idString: string = this.items.reduce((sum, current, index) =>
                                              index === 0 ? sum : sum + ',' + current.id.videoId,
                                             '');
    return this.http2.get<ISearchResponse>(`videos?&id=${idString}&part=snippet,statistics`);
  }

  public loadFullResponse(val: string): Observable<ISearchResponse> {
    return this.http1.get<ISearchResponse>(`search?&type=video&part=snippet&maxResults=15&q=${val}`)
      .pipe(
        concatMap((res): Observable<ISearchResponse> => {
          this.items = res.items;
          return this.loadItemsResponse();
        })
      );
    }

}
