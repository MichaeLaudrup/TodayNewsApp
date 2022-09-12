import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedNewsListComponent } from './components/archived-news-list/archived-news-list.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';

const routes: Routes = [
  {path: '', component: NewsLayoutComponent, children: [
    {path: 'actual-news', component: NewsListComponent},
    {path: '**', redirectTo: 'actual-news'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
