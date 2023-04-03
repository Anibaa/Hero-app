import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero = {
    name: '',
    power: 0,
    img: ''
  }

  ajout(){
    this.sh.heros.push(this.hero)
    this.hero={
      name: '',
      power: 0,
      img: ''}
    
    }
constructor(public sh: SharedService) { }
}
