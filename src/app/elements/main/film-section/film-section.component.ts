import { HomeInterface } from './../../../models/home-interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-section',
  templateUrl: './film-section.component.html',
  styleUrls: ['./film-section.component.scss']
})
  
  
  
export class FilmSectionComponent {
  
  @Input() filmSection: HomeInterface = { 
    section: "", films:[] }
    
}

