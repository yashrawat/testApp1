import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/utils/homepage/homepage.component';
import { PageNotFoundComponent } from './components/utils/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'notes', loadChildren: () => import('./components/notes/notes.module').then(n => n.NotesModule) },
  { path: 'projects', loadChildren: () => import('./components/projects/projects.module').then(p => p.ProjectsModule) },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
