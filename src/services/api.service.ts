import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from 'src/app/note';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  env = environment;  //contains ApiBaseUrl

getAllNote(){
  //implement after add...
}
addNote(note:Note){
  console.log("api "+ this.env.ApiBaseUrl);
  console.log(note);
  return this.http.post(this.env.ApiBaseUrl+ "note", note);
  ///WIP, testme
}
}
