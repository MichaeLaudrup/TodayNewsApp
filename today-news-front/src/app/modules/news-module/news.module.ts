import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { ArchivedNewsListComponent } from './components/archived-news-list/archived-news-list.component';
import { NewListItemComponent } from './components/new-list-item/new-list-item.component';
import { AddNewFormComponent } from './components/add-new-form/add-new-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewsListComponent,
    NewsLayoutComponent,
    ArchivedNewsListComponent,
    NewListItemComponent,
    AddNewFormComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class NewsModule { }
