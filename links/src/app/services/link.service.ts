import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link, LinkDto } from '../models/Interfaces.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  baseurl: string = "http://localhost:8080/api/v1/link";

  constructor(private http: HttpClient) { }

  createLink(linkDto:LinkDto):Observable<Link> {
    return this.http.post<Link>(`${this.baseurl}`, linkDto);
  }

  getLinkById(id:number):Observable<Link>{
    return this.http.get<Link>(`${this.baseurl}/${id}`);
  }
  
  getAllLinks():Observable<Link[]>{
    return this.http.get<Link[]>(`${this.baseurl}/all`);
  }

  updateLink(id:number,linkDto:LinkDto):Observable<Link>{
    return this.http.put<Link>(`${this.baseurl}/${id}`,linkDto);
  }

  deleteLink(id:number):void{
    this.http.delete(`${this.baseurl}/${id}`);
  }

  addTag(idLink:number,idTag:number):Observable<Link>{
    return this.http.put<Link>(`${this.baseurl}/${idLink}/${idTag}`,null);
  }
  
}
