import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) { }

  val: Hero;
  results: Hero[];

  ngOnInit(): void {
  }

  viewHeroDetail(): void {
    this.router.navigateByUrl(`/detail/${this.val.id}`);
  }

  search(event): void {
    this.heroService.searchHeroes(event.query).subscribe(heroes => this.results = heroes );
  }

}
