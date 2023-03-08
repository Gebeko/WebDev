import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albumdata from 'src/assets/albums.json';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NgOptimizedImage } from '@angular/common'


interface AlbumsList {
  userId: number;
  id: number;
  title: string;
}
interface pictures {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})

@Injectable()

export class AlbumPhotosComponent implements OnInit{
  album: AlbumsList[] = albumdata;
  albumdetail: AlbumsList | undefined;
  public userinfo: any;
  constructor(private route: ActivatedRoute,
  private http: HttpClient) { }
  public ngOnInit(): void {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumdetail = this.album.find(album => album.id === albumIdFromRoute)
    const albums_url: string = url.concat("/"+albumIdFromRoute.toString()).concat("/photos");
    this.http.get(albums_url).subscribe((response) => {
      this.userinfo = response;
    })
  }
}
