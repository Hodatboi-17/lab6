import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoturlComponent } from './noturl/noturl.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoturlComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
