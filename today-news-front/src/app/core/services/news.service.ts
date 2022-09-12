import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { NewModel } from "src/app/shared/model/new.model";
import { environment } from "src/environments/environment";
@Injectable({providedIn: 'root'})
export class newService {

    addPhotoToNew(formData: FormData, id: string) {
      return this.http.post(`${environment.baseURL}/news/add-image/${id}`, formData)
        .pipe( map((jsendResponse:{status: string, data: {articledCreated: NewModel}})=> {
        return jsendResponse?.data.articledCreated; 
      }))
    }
    constructor( private http: HttpClient){

    }

    public addNew(newToAdd: NewModel) : Observable<NewModel> {
        return this.http.post<{status: string, data: {articleCreated: NewModel}}>(`${environment.baseURL}/news`, {
            ...newToAdd
        }).pipe( map((jsendResponse:{status: string, data: {articleCreated: NewModel}})=> {
            return jsendResponse?.data.articleCreated; 
        })); 
    }

    public getNews( archiveNews?: boolean) : Observable<NewModel[]>{
        return this.http.get<{status: string, data: NewModel[]}>(`${environment.baseURL}/news${archiveNews ? '?archived=true': ''}`)
          .pipe(map( (jsendResponse:{status: string, data: NewModel[]})=> {
            return jsendResponse?.data; 
        })); 
    }

    public archiveNew(id:string): Observable<any>{
      return this.http.put(`${environment.baseURL}/news/${id}`, {archivedAt: new Date().toISOString}).pipe(map( (jsendResponse:{status:String, data: {newArchived: NewModel}}) => {
        return jsendResponse.data.newArchived; 
      }))
    }

    deleteNew(id: string) {
      return this.http.delete(`${environment.baseURL}/news/${id}`)
        .pipe( map((jsendResponse:{status: string})=>  jsendResponse.status 
      ))
    }
}