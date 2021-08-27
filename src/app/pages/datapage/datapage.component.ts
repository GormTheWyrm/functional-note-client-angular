import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.css']
})
export class DatapageComponent implements OnInit {
  notes: Note[] = [];//{id:1337, title: "placeholder", body:"legwork"}
  warning: string = "";
  noteOpen:boolean = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    //load data from apiservice

  }

  deleteNote(id: number) {
    //fixme 
    console.log(id);
    console.log("this should respond to note being deleted");
    /// WIP

  }
  createNote(note: Note) {
   //first add to DB
    this.api.addNote(note)
    .subscribe( res => {
      console.log(res)
    })
    //then add to notes...
    note.id = this.notes.length;
    this.notes.push(note);
    //...or should I let the page simpy reload?
    //maybe add a refresh database button instad?

  } //fixme: no error handlign yet... also, fix backend





}


//if error in init it should change display to false and add error paragragh warnign user
