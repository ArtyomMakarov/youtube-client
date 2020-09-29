import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-client',
  templateUrl: './youtube-client.component.html',
  styleUrls: ['./youtube-client.component.scss']
})
export class YoutubeClientComponent {
  public showMode: boolean;
  public filterParams: {filterParam: string, increaseParam: boolean};

  constructor() { }

  public showResult(res: boolean): void {
    this.showMode = res;
  }
  public filterItems(params: {filterParam: string, increaseParam: boolean}): void {
    this.filterParams = params;
  }
}
