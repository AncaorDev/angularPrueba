import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PermisosService {
    url_permisos =  'http://localhost:3978/permisos/';

    constructor(public _http: Http) {
    }

    getListaPermisos(){
        return this._http.get(this.url_permisos+'getPermisos').map(res => res.json());
    }

    getListaSistema(){
        return this._http.get(this.url_permisos+'getModulos').map(res => res.json());
    }

    getListaPermisosbySistema(filtro) {
        let  data = {"id_modulo" : filtro};
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url_permisos+'getPermisosbyIdModulo', JSON.stringify(data) ,{headers:headers}).map(res => res.json());
    }
}
