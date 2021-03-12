import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NoturlComponent} from './noturl/noturl.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumsDetailsComponent} from './albums-details/albums-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumsDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NoturlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
