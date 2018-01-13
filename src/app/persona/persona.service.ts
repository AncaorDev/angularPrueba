import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonaService {
    url = 'http://localhost:3978/persona/getPersonas';
    url_update = 'http://localhost:3978/persona/getPersonasUpdate';
    url_filtro = 'http://localhost:3978/persona/getPersonasFiltro';
    constructor(public _http: Http) {
    }

    getListaOnline(){
        let headers = new Headers({'Content-Type':'application/json'});
        //return this._http.post(this.url, '{}',{headers:headers}).map(res => res.json());
        return this._http.get(this.url).map(res => res.json());
    }
    getUpdatePersona(personas_update){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url_update, JSON.stringify(personas_update) ,{headers:headers}).map(res => res.json());
    }
    filtrarData(filtro){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.post(this.url_filtro, JSON.stringify(filtro) ,{headers:headers}).map(res => res.json());
    }
}

