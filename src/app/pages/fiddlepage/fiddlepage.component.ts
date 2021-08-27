import { Component, OnChanges, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { LocalStorageService } from 'src/services/local-storage.service';
import { HeaderComponent } from '../../components/header/header.component';




@Component({
  selector: 'app-fiddlepage',
  templateUrl: './fiddlepage.component.html',
  styleUrls: ['./fiddlepage.component.css']
})
export class FiddlepageComponent implements OnInit {

  //VALUES/Variables
  notes: Note[] = [];
  noteOpen: boolean = false;
  newTitle: string = "";
  newBody: string = "";

  //CONSTRUCTOR
  constructor(private localService: LocalStorageService) { }
  //Methods
  ngOnInit(): void {
    this.loadFromLocalStorage();

  }
  

  openNote() {
    console.log("open note!");
    this.noteOpen = true;
  }
  createNote() {
    //needs to create a new note and add it to notes

    //change this to use formModule...
    this.notes.push({ id: this.notes.length, title: this.newTitle, body: this.newBody });
    console.log("close note");
    this.noteOpen = false;
  }

  saveAllToLocalStorage() {
    localStorage.clear(); //remove old localstorage
    let numStr: any = this.notes.length.toString();
    if (typeof (numStr) == "string") {
      console.log("str" + numStr);

      for (let i = 0; i < this.notes.length; i++) {
        localStorage.setItem("simpleNoteTitle" + i, this.notes[i].title);
        localStorage.setItem("simpleNoteBody" + i, this.notes[i].body);
        console.log("saving... note " + i);
      }
      localStorage.setItem("SimpleNoteNumber", numStr);
      console.log("Notes saved"); //make this visible to user
    }

  }
  loadFromLocalStorage() {
    //load notes upon init
    let strNumOfStoredNotes = localStorage.getItem("SimpleNoteNumber");

    if (typeof (strNumOfStoredNotes) == "string") {
      let num = parseInt(strNumOfStoredNotes, 10);
      for (let i = 0; i < num; i++) {
        let myTitle = localStorage.getItem("simpleNoteTitle" + i);
        let myBody = localStorage.getItem("simpleNoteBody" + i);
        if (typeof (myBody) == "string" && typeof (myTitle) == "string")
          this.notes.push({ id: i, title: myTitle, body: myBody });
      }
    }
    else {
      //error handling... or ignore it because nothing needs doing
    }


  }

  deleteNote(id: number) {
    // delete this.notes[id];
    console.log(id);
    this.notes.splice(id, 1);
    //need to rewrite the notes ids...
    for (let i = 0; i < this.notes.length; i++) {
      this.notes[i].id = i; //changes IDs so delete works on next note

    }
  }


}

//should look into selectedHero and property binding...
//... but making individual notes editable is proably of more use here?

//I'm thinking of using local storage to store notes
