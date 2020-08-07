import { Component, OnInit, Input } from '@angular/core';
import {ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input ()
  private items: Array<ISearchItem>;

  constructor() { }

  ngOnInit(): void {
  }
  get getItems(): Array<ISearchItem> {
    return this.items;
  }

}
