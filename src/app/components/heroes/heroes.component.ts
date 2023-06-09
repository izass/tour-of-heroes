import { Component } from '@angular/core';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.destroyHero(hero.id).subscribe();
  }
}
