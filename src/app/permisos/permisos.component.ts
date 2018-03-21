import { Component } from '@angular/core';
import { PermisosService } from './permisos.service';

@Component({
  selector: 'permisos',
  templateUrl: './permisos.component.html',
  providers : [PermisosService]
})

export class PermisosComponent {

	public permisos:Array<any>;
    constructor(public permisosService : PermisosService){
		this.permisosService.getListaOnline().subscribe(
			result => {
				 console.log(<any>result);
				this.permisos = result;
				},
			error => {
				console.log(<any>error);	
			}
		);
    }
 	
 	ngOnInit() {

 	}

	recibirListado(){
		
	}
}