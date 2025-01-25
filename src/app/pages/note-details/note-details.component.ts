import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../shared/note.module';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  noteId: number;

  isNew: boolean;

  constructor( 
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
   ) {};

  ngOnInit(): void {
    //Differentiate New and Editing
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();

      if (params['id']) {
        this.note = this.noteService.get(params['id']);
        this.noteId = params['id'];
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    if (this.isNew) {
      this.noteService.add(form.form.value);
    } else {
      this.noteService.update(this.noteId, form.form.value.title, form.form.value.body);
    }

    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
