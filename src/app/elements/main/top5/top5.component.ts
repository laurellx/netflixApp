import { Component, Input } from '@angular/core';
import { HomeInterface } from 'src/app/models/home-interface';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.scss']
})
export class Top5Component {    


  @Input() filmSection: HomeInterface = { 
    section: "", films: []
  }
  
}
