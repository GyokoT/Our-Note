import { Routes } from '@angular/router';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: NoteslistComponent },
    { path: 'new', component: NoteDetailsComponent },
    { path: ':id', component: NoteDetailsComponent }
  ] }
];
