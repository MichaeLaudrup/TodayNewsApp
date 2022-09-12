import { Component, OnInit } from '@angular/core';
import { newService } from 'src/app/core/services/news.service';
import { NewModel } from 'src/app/shared/model/new.model';

@Component({
  selector: 'app-news-layout',
  templateUrl: './news-layout.component.html',
  styleUrls: ['./news-layout.component.scss']
})
export class NewsLayoutComponent implements OnInit {
  newsList : NewModel[] = [];

  wantArchivedNews: boolean = false; 
  constructor(private newService: newService) {

  }

  ngOnInit(): void {
    this.newService.getNews().subscribe(news => {
      this.newsList = news; 
    })
  }

}
