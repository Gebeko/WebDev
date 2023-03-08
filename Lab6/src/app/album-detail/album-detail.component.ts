import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albumdata from 'src/assets/albums.json';

interface AlbumsList {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: AlbumsList[] = albumdata;
  albumdetail: AlbumsList | undefined;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumdetail = this.album.find(album => album.id === albumIdFromRoute)
  }
  onEdit(){
    const input = document.getElementById('edit')
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumdetail = this.album.find(album => album.id === albumIdFromRoute)
    if(this.albumdetail != undefined){
      if(input != null){
        this.albumdetail.title = input.innerHTML
      }
    }
  }
}
