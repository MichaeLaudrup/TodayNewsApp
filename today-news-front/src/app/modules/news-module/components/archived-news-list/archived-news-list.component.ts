import { Component, OnInit } from '@angular/core';
import { NewModel } from 'src/app/shared/model/new.model';

@Component({
  selector: 'app-archived-news-list',
  templateUrl: './archived-news-list.component.html',
  styleUrls: ['./archived-news-list.component.scss']
})
export class ArchivedNewsListComponent implements OnInit {
  listArchivedNews: NewModel[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
