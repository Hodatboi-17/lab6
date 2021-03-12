import {Component, OnInit} from '@angular/core';
import {Album} from '../album';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css']
})
export class AlbumsDetailsComponent implements OnInit {
  // @ts-ignore
  albums = Album;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }

  // @ts-ignore
  ngOnInit(): void {
    //this.route.paramMap.subscribe((params) => {
    // @ts-ignore
    //const id = +params.get('id');
    //this.albums = ALBUMS.find((x) => x.id === id);
    //});
    this.getAlbums();
  }

  getAlbums() {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.albumsService.getAlbums(id).subscribe((albums) => {
        this.albums = albums;
      })
    });
  }

  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }


}
