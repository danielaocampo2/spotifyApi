import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  //paises:any[]=[];
  nuevasCanciones:any[]=[];
  loading:boolean;
  mensaje:string="";

  error:boolean=false;

  constructor(private spoty:SpotifyService) { //DENTRO DEL CONSTRUCTOR private http:HttpClient-->

   this.loading=true;

    this.spoty.getNewRealeases()
      .subscribe((data:any)=>{
        this.nuevasCanciones=data;
      },(errorServicio)=>{
        this.error=true;
        this.mensaje= errorServicio.error.error.message;
      });
      this.loading=false;
   }

  // ngOnInit(): void {
  // }

}
