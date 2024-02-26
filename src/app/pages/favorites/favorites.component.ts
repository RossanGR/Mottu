import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import { Characters } from 'src/app/model/characters';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  characterFavorites: Array<Characters> = []

  constructor(public service: RickMortyService) { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites() {
    this.service.getFavorites().subscribe(
      {
        next: (response) => this.characterFavorites = response,
        error: (error) => console.warn(error)
      }
    )
  }

  removeFavorite(id:number){
    const remove:Array<Characters> = this.characterFavorites.filter((characterRemove)=> characterRemove.id != id);
    this.service.removeFavorite(remove!)
  }
}
