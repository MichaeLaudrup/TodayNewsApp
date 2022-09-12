import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { NewModel } from "src/app/shared/model/new.model";
import { environment } from "src/environments/environment";
@Injectable({providedIn: 'root'})
export class newService {

    
    constructor( private http: HttpClient){

    }
    /**
     * Este metodo devuelve un observable el cual inserta una nueva noticia en la base de datos
     * @param newToAdd Noticia que va a ser agregada en la base de datos
     * @returns Observable que devuelve resultado de la nueva noticia insertada
     */
    public addNew(newToAdd: NewModel) : Observable<NewModel> {
        return this.http.post<{status: string, data: {articleCreated: NewModel}}>(`${environment.baseURL}/news`, {
            ...newToAdd
        }).pipe( map((jsendResponse:{status: string, data: {articleCreated: NewModel}})=> {
            return jsendResponse?.data.articleCreated; 
        })); 
    }

    /**
     * Este metodo devuelve noticias archivadas o no archivas segun se reciba un valor true o no respectivamente
     * como argumento de metodo
     * @param archiveNews variable que determina que tipo de noticias se recuperan, si las archivadas o las normales
     * @returns Observable que solicita a servidor noticias archivadas o no archivadas segun el caso
     */
    public getNews( archiveNews?: boolean) : Observable<NewModel[]>{
        return this.http.get<{status: string, data: NewModel[]}>(`${environment.baseURL}/news${archiveNews ? '?archived=true': ''}`)
          .pipe(map( (jsendResponse:{status: string, data: NewModel[]})=> {
            return jsendResponse?.data; 
        })); 
    }

    /**
     * Este metodo devuelve un observable, el cual, solicita que se archive una noticia en el momento
     * presente
     * @param id Identificador de la noticia que se desea archivar
     * @returns Observable que solicita a servidor que se archive una noticia en el momento presente
     */
    public archiveNew(id:string): Observable<any>{
      const body = {
        archiveDate : new Date()
      }
      console.log(body)
      return this.http.put(`${environment.baseURL}/news/${id}`, body).pipe(map( (jsendResponse:{status:String, data: {newArchived: NewModel}}) => {
        return jsendResponse.data.newArchived; 
      }))
    }

    /**
     * Este metodo devuelve un observable, el cual, solicita a servidor que se desarchive una noticia
     * @param id identificador de la noticia que sea desea des-archivar
     * @returns Observable que devuelve resultado de peticion de actualizacion al servidor
     */
    public unarchiveNew(id:string): Observable<any>{
      const body = {
        archiveDate : undefined
      }
      return this.http.put(`${environment.baseURL}/news/${id}`, body).pipe(map( (jsendResponse:{status:String, data: {newArchived: NewModel}}) => {
        return jsendResponse.data.newArchived; 
      }))
    }
    /**
     * Este metodo devuelve un observable que solicita eliminar un archivo a servidor
     * @param id Identificador de noticia a eliminar
     * @returns observable que devuelve resultado de la peticion delete
     */
    deleteNew(id: string) {
      return this.http.delete(`${environment.baseURL}/news/${id}`)
        .pipe( map((jsendResponse:{status: string})=>  jsendResponse.status 
      ))
    }


    /**
     * Este metodo inserta una nueva foto en un nuevo usuario
     * @param formData Archivo que se va a enviar al servidor en formato Form Data
     * @param id Identificador de noticia a la que se debe asociar la imagen
     * @returns Observable del resultado de la  peticion post a servidor para ser consumida 
     */
     addPhotoToNew(formData: FormData, id: string) {
      return this.http.post(`${environment.baseURL}/news/add-image/${id}`, formData)
        .pipe( map((jsendResponse:{status: string, data: {articledCreated: NewModel}})=> {
        return jsendResponse?.data.articledCreated; 
      }))
    }
}