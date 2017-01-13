import { Component } from '@angular/core';
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
})
export class AppComponent  
{ 
  name = 'Angular'; 
  title = 'tour of My Cloud ke Cheetey';
  selectedHero: Hero;
  heroes = HEROES;

 onSelect(hero: Hero): void 
 {
  this.selectedHero = hero;
 }
}




const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Sandeep' },
  { id: 12, name: 'Amit dw' },
  { id: 13, name: 'Lokesh' },
  { id: 14, name: 'Deepek' },
  { id: 15, name: 'Amit sh' },
  { id: 16, name: 'Saurabh' },
  { id: 17, name: 'Kapil' },
  { id: 18, name: 'Dr Jitender' },
  { id: 19, name: 'Nagma' },
  { id: 20, name: 'Tornado' }
];
