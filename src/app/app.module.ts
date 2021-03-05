import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {CardsComponent} from './shared/cards/cards.component';
import {LoadingComponent} from './shared/loading/loading.component';

// Font Awesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// routes import
import {ROUTES} from './app.routes';

// services import
import {SpotifyService} from './services/spotify.service';

// Pipes import
import {NoImagePipe} from './pipes/noimage.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
