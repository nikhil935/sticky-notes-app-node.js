import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  _id?: string;
  name: string;
  content: string;
  createdAt?:string;
  updatedAt?:string
}

@Injectable({ providedIn: 'root' })
export class NoteService {
  private api = 'http://localhost:4040/api/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.api);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.api, note);
  }

  updateNote(id: string, note: Note): Observable<Note> {
    return this.http.patch<Note>(`${this.api}/${id}`, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
