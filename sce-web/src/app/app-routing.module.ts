import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { SearchComponent } from './components/search/search.component'; 

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'students', component: StudentsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
