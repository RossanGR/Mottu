import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import { Characters } from 'src/app/model/characters';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  characterFavorites: Array<Characters> = []

  constructor(public service: RickMortyService, public dialog: MatDialog) { }

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

  open(character:Characters){
    this.dialog.open(ModalComponent,{
      panelClass: 'dialogCustom',
      width: '600px',
      data: character
    })
  }
}
