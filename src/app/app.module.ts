import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { CoverpageComponent } from './pages/coverpage/coverpage.component';
import { DatapageComponent } from './pages/datapage/datapage.component';
import { HeaderComponent } from './components/header/header.component';
import { FiddlepageComponent } from './pages/fiddlepage/fiddlepage.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteFormComponent } from './components/note-form/note-form.component';

//rootModule; AppModule is name by convention
@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    DatapageComponent,
    HeaderComponent,
    FiddlepageComponent,
    NoteComponent,
    PageNotFoundComponent,
    NoteFormComponent,
  ],
  //import modules - can make my own
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'fiddle', component: FiddlepageComponent},
      {path: 'data', component: DatapageComponent},
      {path: 'home', component: CoverpageComponent},
      {path: 'cover', component: CoverpageComponent},
      {path: '', component: CoverpageComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  //services
  providers: [],
  //root component that is inserted into index.html
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Angular topics I should know:
0. explain bootstrapping
1. how to set up a new component
2. What is ng Module
3. What is Angular
...
*/
