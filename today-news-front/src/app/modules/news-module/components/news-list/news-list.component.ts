import { query, stagger, style, transition, trigger, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { newService } from 'src/app/core/services/news.service';
import { NewModel } from 'src/app/shared/model/new.model';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [trigger('list-items-animation', [
    transition('* <=> *', query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(400, [
        animate('.7s ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0%)'
        }))
      ])

    ], {optional: true}))
  ] )]
})
export class NewsListComponent implements OnInit {
  listNews: NewModel[] = []; 
  addNewMode: boolean = false; 
  archivedNewsListMode: boolean = false; 
  constructor(private newService: newService) {

  }

  ngOnInit(): void {
    this.updateNews()
  }

  processData( isSuccessCreate:boolean){
    this.addNewMode = false; 
    if(isSuccessCreate){
      this.updateNews()
    }
  }

  deleteItem(id: string){
    this.newService.deleteNew(id).subscribe( status => {
      if(status === 'success'){
        this.updateNews()
      }
    }); 
  }

  updateNews(){
    if(!this.archivedNewsListMode){
      this.newService.getNews().subscribe(news => {
        this.listNews = news; 
      })
    }else{
      this.newService.getNews(true).subscribe(news => {
      this.listNews = news; 
      })
    }
  }
  archiveNew(id:string){
    this.newService.archiveNew(id).subscribe( _ => {
      this.updateNews(); 
    }); 
  }

  conmuteListOfNewShowed(){
    this.archivedNewsListMode = !this.archivedNewsListMode; 
    this.updateNews(); 
  }
}


