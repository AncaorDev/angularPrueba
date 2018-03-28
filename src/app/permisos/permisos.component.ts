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

    constructor(public permisosService : PermisosService){
		this.permisosService.getListaPermisos().subscribe(
			result => {
				this.permisos = result;
				console.log(this.permisos);
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
 		this.select_sistema = 0;
 	}

 	obtenerSistema() {
 		if (this.select_sistema != 0) {
			this.permisosService.getListaPermisosbySistema(this.select_sistema).subscribe(
	 			result => {
					this.permisos = result;
	 			},
	 			error => {
	 				console.log(<any>error);
	 			}
	 		);
 		}
	}

	updPermisobyId(nid_permiso,flg_habilitado) {
		if(flg_habilitado == null || flg_habilitado == 'N') {
			flg_habilitado = 'S';
		} else {
			flg_habilitado = 'N';
		}
		var json_update = {'nid_permiso' : nid_permiso , 'flg_habilitado' : flg_habilitado };
		this.permisosService.updPermisobyId(json_update).subscribe(
			result => {
			   console.log(result);
			   this.obtenerSistema();
			},
			error => {
				console.log(<any>error);
			}
		);
		console.log(flg_habilitado);
		console.log(nid_permiso);
	}
	
	recibirListado(){
		
	}
}