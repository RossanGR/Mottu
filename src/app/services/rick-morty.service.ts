import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime, distinctUntilChanged} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  apiUrl:string;

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl
  }

  getCharaters():Observable<any>{
    return this.http.get(`${this.apiUrl}/character`)
  }

  getCharacterByName(name:string):Observable<any>{
    const request = this.http.get(`${this.apiUrl}/character?name=${name}`)
    .pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    return request
  }

}