import { Routes } from '@angular/router';
import { NotesPage } from './components/notes-page/notes-page';

export const routes: Routes = [

    {
        path:'',
        component:NotesPage,
        pathMatch:'full'
    }
];
