import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../../notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-page',
  imports: [CommonModule , FormsModule],
  templateUrl: './notes-page.html',
  styleUrl: './notes-page.scss'
})
export class NotesPage implements OnInit {
  notes: Note[] = [];
  newNote: Note = { name: '', content: '' };
  editingNote: Note | null = null;
  errormsg='';

  constructor(private noteService: NoteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
      this.cdr.detectChanges();
    });
  }

  saveNote() {
    if (this.editingNote) {
      this.noteService.updateNote(this.editingNote._id!, this.newNote).subscribe(() => {
        this.resetForm();
        this.loadNotes();
      });
    } else {
      this.noteService.createNote(this.newNote).subscribe(() => {

        this.resetForm();
        this.loadNotes();
      });
    }
  }

  edit(note: Note) {
    this.editingNote = note;
    this.newNote = { ...note };
  }

  delete(id: string) {
    this.noteService.deleteNote(id).subscribe(() => this.loadNotes());
  }

  resetForm() {
    this.editingNote = null;
    this.newNote = { name: '', content: '' };
  }

}
