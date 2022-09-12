import { Component, Input, OnInit } from '@angular/core';
import { newService } from 'src/app/core/services/news.service';
import { listAnimation } from 'src/app/shared/animations/shared.animations';
import { NewModel } from 'src/app/shared/model/new.model';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [ listAnimation]
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

  unarchiveNew(id:string){
    this.newService.unarchiveNew(id).subscribe(_ => {
      this.updateNews(); 
    })
  }
}


