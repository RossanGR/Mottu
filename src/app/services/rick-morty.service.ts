import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters } from '../model/characters';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  apiUrl:string;

  favorites$ = new BehaviorSubject<any>([]);
  numberFavorites$ = new BehaviorSubject<number>(0);

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl
  }

  getCharaters():Observable<any>{
    return this.http.get(`${this.apiUrl}/character`)
  }

  getCharacterByName(name:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/character?name=${name}`)
    .pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
  }

  setFavorities(character:any){
    const oldValue = this.favorites$.getValue()
    const currentValue:Array<Characters> = [...oldValue, character]
    const uniqueValue = currentValue.filter((value: { id: number; }, index: number, self: any[]) =>
    index === self.findIndex((v) => (
      v.id === value.id 
    ))
  );
    this.numberFavorites$.next(uniqueValue.length)
    this.favorites$.next(uniqueValue);
  }
  
  getFavorites():Observable<any>{
    return this.favorites$.asObservable();
  }

  removeFavorite(character:Array<Characters>){
    this.numberFavorites$.next(character.length)
    this.favorites$.next(character);
  }

}