import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from "../../note-card/note-card.component";
import { Note } from '../../shared/note.module';
import { NotesService } from '../../shared/notes.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noteslist',
  standalone: true,
  imports: [
    InputTextModule, 
    FloatLabelModule,
    FormsModule, 
    NoteCardComponent,
    NgFor, 
    RouterLink],
  templateUrl: './noteslist.component.html',
  styleUrl: './noteslist.component.scss',
})
export class NoteslistComponent implements OnInit{

  value: string;

  notes: Note[] = new Array<Note>();

  tempNote: Note[] = new Array<Note>();

  constructor( private noteService: NotesService ) {};

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
    this.tempNote = this.notes;
  }

  onKeyDown(val: string) {
    if (val) {
      this.tempNote = this.notes.filter((i: Note) => i.title.toLowerCase().includes(val.toLowerCase()))
    } else {
      this.tempNote = this.notes;
    }
  }
}
