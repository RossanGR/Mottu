import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';
interface ICharacter{
  results?:Array<{
    id:number,
    name:string,
    status: string,
    specie: string,
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
    created:string
  }>,

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  characters: ICharacter = {
    results: [],
  };
  
  inputName: string = ''
  

  constructor(public service:RickMortyService){}
  
  ngOnInit(){
    this.getAllCharacter()
  }

  getAllCharacter(){
     this.service.getCharaters().subscribe({
      next: (res) => {this.characters = res
        console.log('tamanho', this.characters)
      } ,
      error: (error) => console.log(error)
     })
  }

  getCharacterByName(name:string){
    let searchName = name.toLowerCase()
    this.service.getCharacterByName(searchName).subscribe({
      next: (res) => this.characters.results = res.results,
      error: (error) => console.log('deu ruim', this.characters.results = [])
    })
    
    console.log(this.characters)
  }
}
