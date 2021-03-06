import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {RestBase} from './rest-base.service';
import {GET, POST, PUT, DELETE, Path, Body, Headers, Produces, MediaType} from './rest.decorators';
import {Observable} from 'rxjs';

import { GITLAB_BASE_URL, GITLAB_PRIVATE_TOKEN } from './';

export interface Project {
    id: number;
    name: string;
}

@Injectable()
export class GitlabProjectsRestClient extends RestBase<Project> {

    constructor( @Inject(Http) http: Http, @Inject(GITLAB_BASE_URL) baseUrl: string, @Inject(GITLAB_PRIVATE_TOKEN) privateToken: string) {
        super(http, baseUrl);
        this.addHeader('Private-Token', privateToken);
    }

    @GET('/projects/{id}')
    @Produces(MediaType.JSON)
    // the body of this function will be replaced with the methodBuilder
    // function produced  in ./decorator.ts according the annotations (@GET, @POST, @DELETE, @PUT, @HEAD) configured
    findProject( @Path('id') id: number): Observable<Project> { return null; }

    @GET('/projects/search/{name}')
    @Produces(MediaType.JSON)
    @Headers({
        customHeader1: 'Bla'
    })
    // the body of this function will be replaced with the methodBuilder
    // function produced  in ./decorator.ts according the annotations (@GET, @POST, @DELETE, @PUT, @HEAD) configured
    findProjectByName( @Path('name') id: string): Observable<Project[]> { return null; }

    @GET('/projects')
    @Produces(MediaType.JSON)
    projects(): Observable<Project[]> { return null; }

    @POST('/projects')
    @Produces(MediaType.JSON)
    addProject( @Body project: Project): Observable<Project> { return null; }

    @PUT('/projects')
    @Produces(MediaType.JSON)
    updateProject( @Body project: Project): Observable<Project> { return null; }

    @DELETE('/projects/${id}')
    public deleteById( @Path('id') id: string): Observable<Project> { return null; };

}
