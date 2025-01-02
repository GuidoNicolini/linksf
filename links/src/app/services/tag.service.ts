import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag, TagDto } from '../models/Interfaces.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

    baseurl: string = "http://localhost:8080/api/v1/tag";
  
    constructor(private http: HttpClient) { }
  
    createTag(tagDto:TagDto):Observable<Tag> {
      return this.http.post<Tag>(`${this.baseurl}`, tagDto);
    }
  
    getTagById(id:number):Observable<Tag>{
      return this.http.get<Tag>(`${this.baseurl}/${id}`);
    }
    
    getAllTags():Observable<Tag[]>{
      return this.http.get<Tag[]>(`${this.baseurl}/all`);
    }
  
    updateTag(id:number,tagDto:TagDto):Observable<Tag>{
      return this.http.put<Tag>(`${this.baseurl}/${id}`,tagDto);
    }
  
    deleteTag(id:number):void{
      this.http.delete(`${this.baseurl}/${id}`);
    }
}
