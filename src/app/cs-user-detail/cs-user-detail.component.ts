import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cs-user-detail',
    templateUrl: 'cs-user-detail.component.html',
    styleUrls : ['cs-user-detail.component.scss']
})

export class CsUserDetailComponent implements OnInit {
    @Input() user:any;
    constructor() { 
        this.user = this.user || []; 
    }

    ngOnInit() { }
}