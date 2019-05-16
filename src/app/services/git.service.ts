import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { merge, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { InfoGit } from '../model/info-git.model';

@Injectable({
    providedIn: 'root'
})
export class GitService {

    private readonly URL = environment.api_git;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getInfosByRepos(repos: string){
        return this.httpClient.get<InfoGit>(`${this.URL}/repos/${repos}`)
            .pipe(
                map(
                    response => {
                        response.teste = 'Traldi';
                        return response;
                    }
                )
            );
    }
}

