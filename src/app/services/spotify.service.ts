import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('test');
  }

  getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer',
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data.albums.items));
  }

  getArtists(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }


  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`); // .pipe(map((data: any) => data.artists.items));
  }


  getTopTracks(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/top-tracks?country=pe`).pipe(map((data: any) => data.tracks));
  }
}
