import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  isLoading: boolean;

  constructor(private spotifyService: SpotifyService) {
  }

  Search(term: string): void {
    this.isLoading = true;
    this.spotifyService.getArtists(term).subscribe(
      (data: any) => {
        this.artists = data;
        this.isLoading = false;
      }
    );
  }
}
