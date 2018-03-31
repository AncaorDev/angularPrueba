import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PruebaService {
    end_point = 'https://api.github.com';
    constructor(public _http: Http) {
    }

    getListaGit() {
        let url     = `${this.end_point}/users/ancaorDev`;
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.get(url).map(res => { 
            return res.json()
        });
    }

    getAllUsers(params) {
        let url     = `${this.end_point}/${params}`;
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.get(url).map(res => { 
            return res.json()
        });
    }
}
