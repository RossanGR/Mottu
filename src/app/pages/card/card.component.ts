import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Characters } from 'src/app/model/characters';
import { RickMortyService } from 'src/app/services/rick-morty.service';
interface ICharacter{
  id:number,
  name:string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin:{
    name:string,
    url: string
  },
  location:{
    name:string,
    url: string
  },
  image:string;
  episode:Array<string>,
  url:string,
  created:string,
  isFavorite: boolean
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() characters: Array<Characters> = [];
  @Output() idFavorites = new EventEmitter();


  constructor(public service:RickMortyService, public dialog: MatDialog){}
  
  setFavorite(id:number){
    let characterChosen = this.characters.find((item:ICharacter)=> item.id === id)
    characterChosen!.isFavorite = true
    this.service.setFavorities(characterChosen)
  }

  open(character:Characters){
    this.dialog.open(ModalComponent,{
      panelClass: 'dialogCustom',
      data: character
    })
  }
}
