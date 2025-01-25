import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent implements OnInit, AfterViewInit{
  @Input() title: string;
  @Input() body: string;
  @Input() link: number;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;

  @ViewChild('noteP', { static: true }) noteP!: ElementRef<HTMLElement>;

  constructor(
    private renderer: Renderer2,
    private noteService: NotesService
  ) {};

  ngOnInit(): void {
    // Show truncator if there is text overflow
  }
  
  ngAfterViewInit(): void {
    if (this.noteP.nativeElement.scrollHeight > 80) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none')
    }
  }

  onDelete(id: number) {
    this.noteService.delete(id);
  }
}
