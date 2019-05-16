import { Component, OnInit, Input } from '@angular/core';
import { InfoGit } from 'src/app/model/info-git.model';

@Component({
    selector: 'app-repo',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

    @Input() infoGit: InfoGit;

    constructor() { }

    ngOnInit() {
    }

}
