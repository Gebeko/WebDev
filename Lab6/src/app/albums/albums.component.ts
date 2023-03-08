import { Component } from '@angular/core';
import albumdata from 'src/assets/albums.json';
interface AlbumsList {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(){}
  
  album: AlbumsList[] = albumdata;

  ngOnInit(): void{}
  
}
