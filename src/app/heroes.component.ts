import {Component, OnInit} from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
      private heroService: HeroService,
      private router: Router
  ) {}

  // Property values
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
      this.heroService.getHeroesSlowly().then(
          heroes => this.heroes = heroes
      );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
