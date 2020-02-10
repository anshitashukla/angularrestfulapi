import { Component } from '@angular/core';
import { SpotifyService } from 'spotify/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoading=true;
  constructor(private _spotifyService: SpotifyService){}
  ngOnInit(){
    this._spotifyService.getSpotifyData()
    .subscribe(data => {this.isLoading=false;console.log(data)});
    }
}
