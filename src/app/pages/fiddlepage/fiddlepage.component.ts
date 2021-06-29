import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { HeaderComponent } from '../../components/header/header.component';




@Component({
  selector: 'app-fiddlepage',
  templateUrl: './fiddlepage.component.html',
  styleUrls: ['./fiddlepage.component.css']
})
export class FiddlepageComponent implements OnInit {

//VALUES/Variables
notes:Note[] = [];
noteOpen:boolean = false;
newTitle:string="";
newBody:string ="";

//CONSTRUCTOR
  constructor() { }
//Methods
  ngOnInit(): void {
  }
  openNote(){
    console.log("open note!");
    this.noteOpen =true;
  }
  createNote(){
    //needs to create a new note and add it to notes

    //change this to use formModule...
    this.notes.push({id: this.notes.length, title: this.newTitle, body: this.newBody});
    console.log("close note");
    this.noteOpen = false;
  }
}

//should look into selectedHero and property binding...
//... but making individual notes editable is proably of more use here?