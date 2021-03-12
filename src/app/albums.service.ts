import {Injectable} from '@angular/core';
import {ALBUMS} from './albums-db';
import {of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClientModule) {
  }

  // tslint:disable-next-line:typedef
  //getAlbums() {
  //return of(ALBUMS);
  //}

  // tslint:disable-next-line:typedef
  //getAlbums(id: number) {
  //const albums = ALBUMS.find((x) => x.id === id);
  //return of(albums);
  //}


  // tslint:disable-next-line:typedef
  getAlbums() {
    return of(ALBUMS);
  }

  // tslint:disable-next-line:typedef
  getAlbums(id: number) {
    const albums = ALBUMS.find((x) => x.id === id);
    return of(albums);
  }
}
