import {  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

// Definicion de routas que se va a utilizar en la aplicacion.


export const ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'artist/:id',component:ArtistaComponent},
    {path:'search',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];


