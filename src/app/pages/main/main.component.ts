import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  characters: Array<Characters> = [];
  
  searchInput: string = ''
  

  constructor(public service:RickMortyService){}
  
  ngOnInit(){
    this.getAllCharacter()
  }

  getAllCharacter(){
     this.service.getCharaters().subscribe({
      next: (res) => {this.characters = res.results},
      error: (error) => console.log(error)
     })
  }

  getCharacterByName(name:string){
    let searchName = name.toLowerCase()
    this.service.getCharacterByName(searchName).subscribe({
      next: (res) => this.characters = res.results,
      error: () => this.characters = []
    })
  }

  setFavorite(id:number){
    let characterChosen = this.characters.find((item:ICharacter)=> item.id === id)
    characterChosen!.isFavorite = true
    this.service.setFavorities(characterChosen)
  }

}
