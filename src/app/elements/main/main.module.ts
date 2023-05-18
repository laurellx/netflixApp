import { FilmSectionComponent } from './film-section/film-section.component';
import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top5Component } from './top5/top5.component';
import { HomeInterface } from 'src/app/models/home-interface';



@NgModule({
  declarations: [
    Top5Component,
    FilmSectionComponent
  ],
  exports: [
    FilmSectionComponent,
    Top5Component
  ],
  imports: [
    CommonModule
  ]
})
  
export class MainModule { 

  @Input() filmSection: HomeInterface = { 
    section: "", films:[] }
}
