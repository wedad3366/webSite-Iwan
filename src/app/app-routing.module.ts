import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { VideosComponent } from './videos/videos.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCategoriesComponent } from './project-categories/project-categories.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"collaborators" , component:CollaboratorsComponent},
  {path:"contact" , component:ContactComponent},
  {path:"projects" , component:ProjectsComponent},
  {path:"services" , component:ServicesComponent},
  {path:"videos" , component:VideosComponent},
  {path:"project-details/:slug" , component:ProjectDetailsComponent},
  {path:"project-category/:slug" , component:ProjectCategoriesComponent},
  {path:"**" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
