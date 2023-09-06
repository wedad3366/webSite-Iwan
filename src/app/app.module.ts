import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { VideosComponent } from './videos/videos.component';
import { ServicesComponent } from './services/services.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCategoriesComponent } from './project-categories/project-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    VideosComponent,
    ServicesComponent,
    CollaboratorsComponent,
    ContactComponent,
    ProjectDetailsComponent,
    ProjectCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
