import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  isLoading: boolean;
  existError: boolean;
  messageError: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.existError = false;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
        this.newSongs = data;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.existError = true;
        this.isLoading = false;
        this.messageError = err.error.error.message;
      });
  }

  ngOnInit(): void {
  }
}
