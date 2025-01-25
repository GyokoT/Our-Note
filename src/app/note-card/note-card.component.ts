import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent implements OnInit, AfterViewInit{
  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;

  @ViewChild('noteP', { static: true }) noteP!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {};

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
}
