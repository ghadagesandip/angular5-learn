import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: HERO;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }


  onSelect(hero: HERO): void {
    this.selectedHero = hero;
  }




}
