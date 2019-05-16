import { Component, OnInit, Input } from '@angular/core';
import { InfoGit } from 'src/app/model/info-git.model';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

    @Input() infosGit: InfoGit[];

    constructor() { }

    ngOnInit() {
    }

}
