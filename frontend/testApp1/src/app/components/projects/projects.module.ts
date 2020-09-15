import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AngularMaterialModule } from '../utils/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AngularMaterialModule,
    // HttpClientModule
  ]
})
export class ProjectsModule { }
