import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent {
  constructor(
    private heroService: HeroService,
  ) {}

  @Input() heroes!: Hero[];

  createHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
