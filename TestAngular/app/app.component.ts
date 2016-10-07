import { Component } from '@angular/core';
import {Hero} from './hero';




const HEROES: Hero[] = [
    { id: 11, name: 'Bob Baluba' },
    { id: 12, name: 'Roy Arne Salater' },
    { id: 13, name: 'Ahmed, the dead terrorist' },
    { id: 14, name: 'Batman' },
    { id: 15, name: 'Superman' },
    { id: 16, name: 'Magneto' },
    { id: 17, name: 'Wolverine' },
    { id: 18, name: 'Spoderman' },
    { id: 19, name: 'Pondus' },
    { id: 20, name: 'Sherlock Holmes' }
];

@Component({
    selector: 'my-app',
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        
    `
})



export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    heroes = HEROES;
}
