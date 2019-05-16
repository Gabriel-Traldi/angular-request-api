import { Component } from '@angular/core';
import { GitService } from './services/git.service';
import { take, distinctUntilChanged, finalize, mergeMap, map } from 'rxjs/operators';
import { InfoGit } from './model/info-git.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'nerdzao-app';

    infosGit: InfoGit[];

    frameworksSearched: string[];

    listas = [null];

    itemList = ['thing zero', 'thing one', 'thing two', ''];

    customTrackBy(index: number, obj: any): any {
        return index;
    }

    constructor(
        private gitService: GitService,
    ) {
        this.infosGit = [];
        this.frameworksSearched = [];
    }

    add() {
        this.itemList.push(null);
    }

    searchRepos(input: HTMLInputElement) {
        if (this.frameworksSearched.indexOf(input.value) < 0) {
            this.frameworksSearched.push(input.value);
            this.gitService.getInfosByRepos(input.value)
                .pipe(
                    map(
                        response => {
                            response.teste += response.teste;
                            return response;
                        }
                    )
                )
                .subscribe(
                    (response) => {
                        if (response) {
                            console.log('response', response);
                            this.infosGit.push(response);
                        }
                    },
                    (error) => {
                        console.error('error request', error);
                    }
                );
        } else {
            console.error('já pesquisou');
        }
    }

}
