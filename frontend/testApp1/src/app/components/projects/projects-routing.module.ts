import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
