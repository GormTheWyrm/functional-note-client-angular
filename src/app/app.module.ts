import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverpageComponent } from './pages/coverpage/coverpage.component';
import { DatapageComponent } from './pages/datapage/datapage.component';
import { HeaderComponent } from './components/header/header.component';
import { FiddlepageComponent } from './pages/fiddlepage/fiddlepage.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';

//rootModule; AppModule is name by convention
@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    DatapageComponent,
    HeaderComponent,
    FiddlepageComponent,
    NoteComponent
  ],
  //import modules - can make my own
  imports: [
    BrowserModule,
    FormsModule
  ],
  //services
  providers: [],
  //root component that is inserted into index.html
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Angular topics I should know:
1. how to set up a new component
2. What is ng Module
3. What is Angular
...
*/
