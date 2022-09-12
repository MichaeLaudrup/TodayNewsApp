import { Component, EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { NewModel } from 'src/app/shared/model/new.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'new-list-item',
  templateUrl: './new-list-item.component.html',
  styleUrls: ['./new-list-item.component.scss'],
})
export class NewListItemComponent implements OnInit {
  @Input() newArticle: NewModel; 
  @Output() deletedClicked: EventEmitter<string> = new EventEmitter(); 
  @Output() archivedClicked: EventEmitter<string> = new EventEmitter(); 
  @Input() unarchivedMode: boolean = false; 
  urlBase: string = environment.baseURLStaticFiles; 
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.deletedClicked.emit(this.newArticle._id); 
  }

  archivedItem(){
    this.archivedClicked.emit(this.newArticle._id); 
  }

}
