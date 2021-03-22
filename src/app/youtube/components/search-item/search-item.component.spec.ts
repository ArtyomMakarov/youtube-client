import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SearchItemComponent } from './search-item.component';
import { Router } from '@angular/router';
import {ItemCardBorderColorDirective} from '../../directives/item-card-border-color.directive';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailedInfoService } from '../../services/detailed-info.service';
import { By } from '@angular/platform-browser';
import {ISearchItem} from '../../models/search-item.model';
import {ICustomCard} from '../../models/customCard.model';
import { ViewChild } from '@angular/core';

@Component({
  template: `
    <app-search-item [items]="items" [customCards]="customCards">
    </app-search-item>
  `
  })
class TestHostComponent {
  @ViewChild(SearchItemComponent)
  public componentUnderTestComponent: SearchItemComponent;

  public items: Array<ISearchItem> = [
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
        id: {name: 'YN8zNnV0sK8'},
        snippet: {
          publishedAt: '2019-05-30T12:42:19.000Z',
          channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
          title: 'Angular 8 - Быстрый курс за 60 минут',
          description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Владилен Минин',
          tags: [
            'angular',
            'angular 8',
            'angularjs',
            'js',
            'javascript',
            'rxjs',
            'angular 60 минут',
            'angular 1 час',
            'angular 8 1 час',
            'владилен минин',
            'уроки javascript',
            'angular 2',
            'angular 4',
            'angular уроки',
            'курс angular',
            'основы angular',
            'angular фреймворк',
            'angular уроки для начинающих',
            'уроки angular',
            'angular практика',
            'ангуляр',
            'angular изучение',
            'angular курс',
            'ангуляр 4 уроки',
            'angular уроки на русском'
          ],
          categoryId: '27',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Angular 8 - Быстрый курс за 60 минут',
            description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут'
          },
          defaultAudioLanguage: 'en-US'
        },
        statistics: {
          viewCount: '33265',
          likeCount: '1173',
          dislikeCount: '26',
          favoriteCount: '0',
          commentCount: '170'
        }
      }
  ];
  public customCards: Array<ICustomCard> = [
    {
      id: 'afafqf',
      title: 'qwfqwf',
      description: 'qwfqfqw',
      img: 'https://gutta.lv/wp-content/uploads/2015/10/test-img-300x185.jpg',
      linkVideo: 'https://www.youtube.com/watch?v=IFGgm35U7t0&t=2409s&ab_channel=RollingScopesSchool',
      date: '2019-05-30T12:42:19.000Z'
    }
  ];
}

xdescribe('SearchItemComponentMocked', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [SearchItemComponent, TestHostComponent, ItemCardBorderColorDirective],
      providers: [DetailedInfoService]
     })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  describe('getItems', () => {
    it('should return items', () => {
      expect(testHostComponent.items).toEqual(testHostComponent.componentUnderTestComponent.getItems);
    });
  });

  describe('getCustomCards', () => {
    it('should return custom cards', () => {
        expect(testHostComponent.customCards)
          .toEqual(testHostComponent.componentUnderTestComponent.getCustomCards);
    });
  });
});

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let mockDetailedInfoService = {
    set: jasmine.createSpy('set')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchItemComponent],
      providers: [
        { provide: DetailedInfoService, useValue: mockDetailedInfoService },
        { provide: Router, useValue: routerSpy}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    // mockDetailedInfoService = TestBed.inject(DetailedInfoService);
    fixture.detectChanges();
  });

  describe('goToDetailedInfo', () => {
    let item: ISearchItem = {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
      id: {
        videoId: 'YN8zNnV0sK8',
        id: 'YN8zNnV0sK8'},
      snippet: {
        publishedAt: '2019-05-30T12:42:19.000Z',
        channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
        title: 'Angular 8 - Быстрый курс за 60 минут',
        description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'Владилен Минин',
        tags: [
          'angular',
          'angular 8',
          'angularjs',
          'js',
          'javascript',
          'rxjs',
          'angular 60 минут',
          'angular 1 час',
          'angular 8 1 час',
          'владилен минин',
          'уроки javascript',
          'angular 2',
          'angular 4',
          'angular уроки',
          'курс angular',
          'основы angular',
          'angular фреймворк',
          'angular уроки для начинающих',
          'уроки angular',
          'angular практика',
          'ангуляр',
          'angular изучение',
          'angular курс',
          'ангуляр 4 уроки',
          'angular уроки на русском'
        ],
        categoryId: '27',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Angular 8 - Быстрый курс за 60 минут',
          description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут'
        },
        defaultAudioLanguage: 'en-US'
      },
      statistics: {
        viewCount: '33265',
        likeCount: '1173',
        dislikeCount: '26',
        favoriteCount: '0',
        commentCount: '170'
      }
    };
    it('should call detailed-info service and navigate to detailed info page', () => {
      component.goToDetailedInfo(item);
      // button.triggerEventHandler('click', item);
      // fixture.detectChanges();
      expect(mockDetailedInfoService.set).toHaveBeenCalled();
      // expect(routerSpy.navigate).toHaveBeenCalledWith([`/search/info/${item.id.id}`]);
    });
  });
});
