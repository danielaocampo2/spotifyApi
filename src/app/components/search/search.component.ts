import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  loading:boolean;
  artistas:any[]=[];

  constructor(private spoti:SpotifyService) {



  }

  buscar(termino:string){
    this.loading=true;
    this.spoti.getArtistas(termino)
      .subscribe((data:any)=>{
          this.artistas= data; // con esto es que llenamos la ifo por eso no lo dejamos en el servicio
          this.loading=false;
        });
  }

}
