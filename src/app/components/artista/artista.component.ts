import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {
  artista:any={};
  loading:boolean;
  topTracks:any[]=[];

  constructor(private router:ActivatedRoute, private spoty:SpotifyService) {
    this.router.params. subscribe(params=>{
      //console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }


getArtista(id:string){
  this.loading=true;
  this.spoty.getArtista(id)
     .subscribe(data=>{
       this.artista=data;

      });
}

getTopTracks(id:string){
  this.spoty.getTopTracks(id)
    .subscribe(topTracks =>{
      this.topTracks=topTracks;
      console.log(topTracks)
      this.loading=false;
    });

}






}
