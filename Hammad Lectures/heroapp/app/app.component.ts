import { Component } from '@angular/core';
import { Hero } from './hero';
import { ClickMeComponent } from './click-me/click-me.component'
import { LoopbackComponent } from './loop-back/loop-back.component';


@Component({
  selector: 'root-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>

    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p><hr>
    
    <click-me></click-me><br><br><hr>

    <loop-back></loop-back><br><br><hr>

  `
})
/*export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
*/
export class AppComponent {
  title = 'Tour of Heroes';
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[3];
}
