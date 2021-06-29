import { Component, Input, OnInit, OnChanges} from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void {
    //get note from parent now...
  }
}
//reminder: add a border

