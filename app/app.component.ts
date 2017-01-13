import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

import { Hero } from './hero'

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  <h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
  `,
  templateUrl:'app.component.html',
  providers:[HeroService],
})
export class AppComponent  implements OnInit
{ 
  name = 'Angular'; 
  title = 'tour of My Cloud ke Cheetey';
  selectedHero: Hero;
  heroes : Hero[];
  constructor(private heroService :HeroService){ }

 onSelect(hero: Hero): void 
 {
  this.selectedHero = hero;
 }
 ngOnInit(): void {
   this.getHeros();
 }

 getHeros():void{
   this.heroService.getHeros().then(heroes => this.heroes = heroes);
 }
}





