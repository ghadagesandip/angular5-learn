import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor( private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log('loadHeroesAgain called 1')
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  loadHeroesAgain():void{
    console.log('loadHeroesAgain called')
    this.getHeroes();
  }


}
