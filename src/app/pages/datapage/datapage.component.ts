import { Component, OnChanges, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.css']
})
export class DatapageComponent implements OnInit {
  notes: Note[] = [];
  warning: string = "";
  noteOpen: boolean = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  deleteNote(id: number) {
    this.api.deleteNote(id)
      .subscribe(res => {
        console.log(res); //null
      },err=>{
        this.warning = "Could not delete note."; 
        //this would quickly change to error from getAllNotes...
      });
    //load data from apiservice
    this.getAllNotes();
  }

  createNote(note: Note) {
    //first add to DB
    this.api.addNote(note)
      .subscribe(res => {
        console.log(res);
        this.notes.push(res);
      },err=>{
        this.warning = "Could not post data to database.";
      });

  } //fixme: no error handlign yet... also, fix backend

  getAllNotes() {
    this.warning = "";//reset warning
    this.api.getAllNote() //wip
      .subscribe(res => {
        this.notes = res;
      }, err => {
        this.warning = "Could not retrieve data from database.";
      })//end subscribe block
  }


}


//if error in init it should change display to false and add error paragragh warnign user
