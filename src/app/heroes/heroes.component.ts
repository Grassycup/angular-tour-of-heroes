import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  
  // HeroService is defined in appmodule as provider and is injected as requested
  constructor(private heroService: HeroService) { }

  // call the service method to get heroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe((
      // remove the item we're trying to delete from the list by updating array to filtered array that doesn't contain this item
      // delay the actual delete until successful delete call
      // should delete return something to indicate success?
      () => this.heroes = this.heroes.filter(h => h !== hero))
    );
  }

  ngOnInit() {
    this.getHeroes();
  }

}
