import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExpertiesComponent } from './components/experties/experties.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialComponent } from './components/social/social.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    ClientsComponent,
    SkillsComponent,
    ExpertiesComponent,
    ContactComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
