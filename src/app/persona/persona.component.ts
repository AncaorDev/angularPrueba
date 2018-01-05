import { Component } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  providers : [PersonaService]
})

export class PersonaComponent {
	flg_mostrar_tabla:boolean = true;
	nombre  :string	= '';
	apellido_pat:string = '';
	apellido_mat:string = '';
	fecha_nac:string = '';
	nid_persona:number = null;
	edad    :number = null;
	documento    :number = null;
	index   :number = null;
	color:string    = 'white';
	result:string    = '';
	filtro:string = '';
  	public personas:Array<any>;
    
    constructor(public personaService : PersonaService){
		this.recibirListado();
		// console.log(this.personas);
    }
 	
 	ngOnInit() {

 	}
	activeDesactive(flg) {
		this.flg_mostrar_tabla = flg;
	}

	capturarDatos(tg,i) {
		this.nombre        = tg.nom_persona;
		this.apellido_pat  = tg.ape_pate_pers;
		this.apellido_mat  = tg.ape_mate_pers;
		this.documento     = tg.nro_documento;
		this.fecha_nac     = tg.fec_naci;
		this.nid_persona   = tg.nid_persona;
		this.index         = i;
	}
	asignarData() {
		var personas_update;
		this.personas[this.index] = {nid_persona: this.nid_persona, nom_persona: this.nombre, ape_pate_pers: this.apellido_pat  , ape_mate_pers: this.apellido_mat, nro_documento: this.documento, fec_naci: this.fecha_nac};
		personas_update = { nom_persona : this.nombre,
							ape_pate_pers: this.apellido_pat, 
							ape_mate_pers: this.apellido_mat, 
							nro_documento: this.documento, 
							fec_naci: this.fecha_nac, 
							nid_persona: this.nid_persona };
		this.personaService.getUpdatePersona(personas_update).subscribe(
			result => {
				console.log(<any>result);
			},
			error => {
				console.log(<any>error);	
			}
		);
	}

	recibirListado(){
		this.personaService.getListaOnline().subscribe(
			result => {
				//  console.log(<any>result);
				this.personas = result;
				},
			error => {
				console.log(<any>error);	
			}
		);
	}

	filtrarData(){
		this.personaService.filtrarData({name:this.filtro}).subscribe(
			result => {
				console.log(<any>result);
				this.personas = result;
			},
			error => {
				console.log(<any>error);	
			}
		);
	}
}

