import { Injectable } from '@angular/core';
import { Profile, ProfileDto } from '../models/Interfaces.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   baseurl: string = "http://localhost:8080/api/v1/profile";
 
   constructor(private http: HttpClient) { }
 
   createProfile(profileDto:ProfileDto):Observable<Profile> {
     return this.http.post<Profile>(`${this.baseurl}`, profileDto);
   }
 
   getProfileById(id:number):Observable<Profile>{
     return this.http.get<Profile>(`${this.baseurl}/${id}`);
   }
   
   getAllProfiles():Observable<Profile[]>{
     return this.http.get<Profile[]>(`${this.baseurl}/all`);
   }
 
   updateProfile(id:number,profileDto:ProfileDto):Observable<Profile>{
     return this.http.put<Profile>(`${this.baseurl}/${id}`,profileDto);
   }
 
   deleteProfile(id:number):void{
     this.http.delete(`${this.baseurl}/${id}`);
   }
}
