import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Note } from 'src/app/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  newTitle: string = "";
  newBody: string = "";
  @Output() noteCreation = new EventEmitter<Note>();


  constructor() { }
  // @Input()

  ngOnInit(): void {
  }


  createNote() {
    //needs to create a new note and add it to notes
    //change this to use formModule...
    let newNote: Note = { title: this.newTitle, body: this.newBody }
    console.log("emit: " + newNote.title)
    this.noteCreation.emit(newNote
    );
    //reset text, should i do this the other way?
    this.newTitle = "";
    this.newBody = "";
  }

}
