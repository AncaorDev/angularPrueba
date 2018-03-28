import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PruebaService {
    url = 'https://api.github.com/users/ancaordev';
    constructor(public _http: Http) {
    }

    getListaGit(){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.get(this.url).map(res => res.json());
    }
}
