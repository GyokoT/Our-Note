import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from "../../note-card/note-card.component";

@Component({
  selector: 'app-noteslist',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, InputGroupModule, InputGroupAddonModule, FormsModule, NoteCardComponent],
  templateUrl: './noteslist.component.html',
  styleUrl: './noteslist.component.scss'
})
export class NoteslistComponent {
  value = '';

  onAdd() {
    console.log('here');
  }
}
