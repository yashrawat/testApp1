import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { HttpClientModule } from '@angular/common/http';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { SpecialNoteComponent } from './special-note/special-note.component';
import { SpecialNoteDetailComponent } from './special-note-detail/special-note-detail.component';
import { AngularMaterialModule } from '../utils/angular-material/angular-material.module';


@NgModule({
  declarations: [
    NoteComponent,
    NoteDetailComponent,
    SpecialNoteComponent,
    SpecialNoteDetailComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
    // HttpClientModule
  ]
})
export class NotesModule { }
