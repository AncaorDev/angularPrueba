import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermisosService {
    url = 'http://localhost:3978/permisos/getPermisos';
    constructor(public _http: Http) {
    }

    getListaOnline(){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.get(this.url).map(res => res.json());
    }
}
