import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'no server was created';
    serverName = 'Testserver';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer(){
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}