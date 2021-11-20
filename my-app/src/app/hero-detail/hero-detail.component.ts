import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer',
            'Loving', 'Nothing', 'Strong', 'Cunning', 'Jumping'];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadHero();
  }

  loadHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.hero = new Hero(42, '', '');
  }
}
