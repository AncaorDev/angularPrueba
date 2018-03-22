import { Component } from '@angular/core';
import { PermisosService } from './permisos.service';

@Component({
  selector: 'permisos',
  templateUrl: './permisos.component.html',
  providers : [PermisosService]
})

export class PermisosComponent {

	public permisos:Array<any>;
	public permisos_sistema:Array<any>;
	public sistemas:Array<any>;
	public select_sistema:any;
	public mostrar_tabla:boolean;

    constructor(public permisosService : PermisosService){
		this.permisosService.getListaPermisos().subscribe(
			result => {
				this.permisos = result;
				},
			error => {
				console.log(<any>error);	
			}
		);

		this.permisosService.getListaSistema().subscribe(
			result => {
				this.sistemas = result;
				},
			error => {
				console.log(<any>error);	
			}
		);

    }
 	
 	ngOnInit() {
 		this.mostrar_tabla  = false;
 		this.select_sistema = 0;
 	}

 	obtenerSistema() {
 		this.permisosService.getListaPermisosbySistema(this.select_sistema).subscribe(
 			result => {
 				this.mostrar_tabla  = true;
 				console.log(result);
 				this.permisos_sistema = result;
 				console.log(this.permisos_sistema);
 			},
 			error => {
 				console.log(<any>error);
 			}
 		);
	}

	recibirListado(){
		
	}
}