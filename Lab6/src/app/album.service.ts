import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

interface IAlbum{
  
} 
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums_url: string = "https://jsonplaceholder.typicode.com/albums";
  constructor(private _http: HttpClient) {}
  getAllAlbums(): Observable<IAlbum []> {
    return this._http.get<IAlbum []>(this.albums_url)
      .pipe(
        tap(data =>
        console.log('All: ' + JSON.stringify(data)))
      );
  }
}