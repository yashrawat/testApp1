import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteComponent } from './note/note.component';
import { SpecialNoteDetailComponent } from './special-note-detail/special-note-detail.component';
import { SpecialNoteComponent } from './special-note/special-note.component';

const routes: Routes = [
  { path: 'note', component: NoteComponent },
  { path: 'note-detail/:id', component: NoteDetailComponent },
  { path: 'special-note', component: SpecialNoteComponent },
  { path: 'special-note-detail/:id', component: SpecialNoteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
