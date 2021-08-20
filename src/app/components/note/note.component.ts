import { Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  //variables
  noteOpen: boolean = false;
  @Input()note:Note = {id:0, title:"test", body:"init"};
  @Output() noteDeleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void {
    //get note from parent now...
  }
  deleteNote(){
    this.noteDeleted.emit(this.note.id);
    //this should allow the event to be picked up by parent or via service
    //allowing component to be used in multiple pages
    //... I hope
  }
}
//reminder: add a border

