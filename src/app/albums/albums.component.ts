import {Component, OnInit} from '@angular/core';
import {Album} from '../album';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  // @ts-ignore
  albums: Album[];

  constructor(private albumsService: AlbumsService ) {
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  // tslint:disable-next-line:typedef
  getAlbums(){
    this.AlbumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

}
