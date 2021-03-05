import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loadingArtist = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string): void {
    this.loadingArtist = true;
    this.spotifyService.getArtist(id).subscribe((data: any) => {
      this.artist = data;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string): void {
    this.spotifyService.getTopTracks(id).subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
