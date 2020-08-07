import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-client',
  templateUrl: './youtube-client.component.html',
  styleUrls: ['./youtube-client.component.scss']
})
export class YoutubeClientComponent implements OnInit {
  public showMode: boolean;
  public filterParam: {param1: string, param2: boolean};
  constructor() { }

  ngOnInit(): void {
  }
  showResult(res: boolean): void {
    this.showMode = res;
  }
  filterItems(params: {param1: string, param2: boolean}): void {
    this.filterParam = params;
  }
}
