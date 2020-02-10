import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService{
constructor(private _http: Http){
}
getSpotifyData(){
return this._http.get("https://jsonplaceholder.typicode.com/todos/1")
.map(res => res.json())
}
}
