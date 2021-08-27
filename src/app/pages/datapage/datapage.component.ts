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
    //load data from apiservice
    // this.api.getAllNote() //wip
    // .subscribe(res=>{
    //   this.notes = res;
    // console.log(res);
    // }, err => {

    // })//end subscribe block
  }

  deleteNote(id: number) {
    //fixme 
    console.log(id);
    console.log("this should respond to note being deleted");
    /// WIP
    this.api.deleteNote(id)
      .subscribe(res => {
        console.log(res); //null
        //now need to remove data from notes...     
        console.log(this.notes);
      }); //id does not correspond with notes[id]... 
    //... how to delete this or refresh/call api getall again

    //load data from apiservice
    this.api.getAllNote() //wip
      .subscribe(res => {
        this.notes = res;
        console.log(res);
      })

  }
  createNote(note: Note) {
    //first add to DB
    this.api.addNote(note)
      .subscribe(res => {
        console.log(res);
        this.notes.push(res);
      })

  } //fixme: no error handlign yet... also, fix backend


getAllNotes(){
  this.warning = "";//reset warning
  this.api.getAllNote() //wip
  .subscribe(res=>{
    this.notes = res;

  console.log(res);
  }, err => {
    console.log("error caught?");
    console.log(err);
    this.warning = "Could not retrieve data from database";
  })//end subscribe block
}


}


//if error in init it should change display to false and add error paragragh warnign user
