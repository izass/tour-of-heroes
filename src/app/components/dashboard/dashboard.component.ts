import { Component } from '@angular/core';
import { Hero } from '../../domain/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}