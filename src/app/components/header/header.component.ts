import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  numberFavorites$!: Observable<number>;
  constructor(public service:RickMortyService){
    this.numberFavorites$ = this.service.numberFavorites$
  }
}
