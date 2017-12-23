import { Component } from '@angular/core';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
})

export class PersonaComponent {
	flg_mostrar_tabla:boolean = true;
	nombre  :string	= '';
	apellido:string = '';
	edad    :number = null;
	index   :number = null;
	color:string    = 'white';
  	personas = [
			    { nombre: 'Alejandra', apellido: 'Quiroga'  , edad: 25 },
			    { nombre: 'Jason'    , apellido: 'Ajax'     , edad: 33 },
			    { nombre: 'Mauricio' , apellido: 'Katze'    , edad: 58 },
			    { nombre: 'José Luis', apellido: 'Rodríguez', edad: 74 },
			    { nombre: 'Arya'     , apellido: 'Stark'    , edad: 9 }
			];
    
    constructor(){
    	console.log('constructor');
    }
 	
 	ngOnInit() {
 		console.log('init');
 	}
	activeDesactive(flg) {
		this.flg_mostrar_tabla = flg;
	}

	capturarDatos(tg,i) {
		this.nombre    = tg.nombre;
		this.apellido  = tg.apellido;
		this.edad      = tg.edad;
		this.index     = i;
	}
	asignarData() {;
		this.personas[this.index] = {nombre: this.nombre, apellido: this.apellido  , edad: this.edad};
	}
}
