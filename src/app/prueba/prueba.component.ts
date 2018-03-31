import { Component, Output, EventEmitter } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls  : ['prueba.component.scss'],
  providers : [PruebaService]
})

export class PruebaComponent {
    color:string = "pink";
    isShow: boolean;
    lastName: string = "";
    detalles : string;
    info_btn : string = "Ver datos Git";
    // Datos Git
    datosGit:any;
    name: string = "";
    url: string  = "";
    blog: string  = "";
    users:any;

    @Output() onUserSelect = new EventEmitter();
    
    constructor(public pruebaService : PruebaService){
      
    }
 	
 	ngOnInit() {
        this.getAllUser();
 	}

    //metodoa publico
    showMessage(): void {
        this.getListGit();
    }

    getListGit(){
        this.pruebaService.getListaGit().subscribe(
			result => {
                const igv: number = 0.018;
                this.isShow = !this.isShow;
                this.name = result.name;
                this.url  = result.url;
                this.blog = result.blog;
                this.info_btn = this.isShow ? 'Ocultar de Git' : 'Ver datos Git';
                console.log(  this.name );
				},
			error => {
				console.log(<any>error);	
			}
		);
    }

    getAllUser() {
        this.pruebaService.getAllUsers('users')
            .subscribe(users => {
                this.users = users
            })
    }
    
    selectUser(user:any) {
        this.onUserSelect.emit(user);
    }
}