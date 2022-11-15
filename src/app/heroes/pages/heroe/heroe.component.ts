import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  constructor(private _route: ActivatedRoute, private heroeService:HeroesService) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot.paramMap.get('id'));
    this._route.params
    .pipe(
      switchMap(({id})=> this.heroeService.getHeroePorId(id))
    )
    .subscribe(heroe => this.heroe=heroe);
  }

}
