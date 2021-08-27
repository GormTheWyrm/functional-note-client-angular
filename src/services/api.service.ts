import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from 'src/app/note';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  env = environment;  //contains ApiBaseUrl

getAllNote(){
  //implement after add...
  //: Observable<Note> //figure out type...
  return this.http.get<Note[]>(this.env.ApiBaseUrl + "notes");
}
addNote(note:Note){
  console.log("api "+ this.env.ApiBaseUrl);
  console.log(note);
  return this.http.post<Note>(this.env.ApiBaseUrl+ "note", note);
  ///WIP, testme
}

getSingleNote(id:number){
  //implment
}
deleteNote(id:number){
  //wip
}
}
