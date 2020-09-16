import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Store} from '@ngrx/store';
import {IState} from '../../../redux/state.models';
import {AddCustomCardsAction} from '../../../redux/actions/items.actions';
import { ICustomCard } from '../../../youtube/models/customCard.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  @ViewChild('titleInput') private titleInputElemRef: ElementRef;
  @ViewChild('descriptionInput') private descriptionElemRef: ElementRef;
  @ViewChild('imgInput') private imgElemRef: ElementRef;
  @ViewChild('linkVideoInput') private linkVideoElemRef: ElementRef;
  public customerForm: FormGroup;

  constructor(private router: Router, private store: Store<IState>) { }

  public ngOnInit(): void {
    this.customerForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      linkVideo: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  public createNewCard(): void {
    let date: string = '' + new Date();
    const customCardInfo: ICustomCard = {
      id: this.titleInputElemRef.nativeElement.value,
      title: this.titleInputElemRef.nativeElement.value,
      description: this.descriptionElemRef.nativeElement.value,
      img: this.imgElemRef.nativeElement.value,
      linkVideo: this.linkVideoElemRef.nativeElement.value,
      date: date
    };
    this.store.dispatch(new AddCustomCardsAction( customCardInfo ) );
    this.router.navigate(['/search']);
  }

}
