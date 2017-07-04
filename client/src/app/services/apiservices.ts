import { Inject, Injectable, Optional }                         from '@angular/core';
import { Http, Headers, URLSearchParams }                       from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs }    from '@angular/http';
import { Response, ResponseContentType }                        from '@angular/http';
import { Observable }                                           from 'rxjs/Observable';
import { BASE_PATH, COLLECTION_FORMATS }                        from '../../variables';
import { Configuration }                                        from '../../configuration';
import { Book }                                                 from '../models/book.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiServices {
    protected basePath = 'http://localhost/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Posts a new Book to shelf
     * 
     * @param book book to be added
     */
    public addBook(book?: Book, extraHttpRequestParams?: any): Observable<{}> {
        return this.addBookWithHttpInfo(book, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete book by ID
     * Deleted a Book
     * @param id ID of book to delete
     */
    public deleteBookById(id: number, extraHttpRequestParams?: any) {
        return this.deleteBookByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Gets all the Books
     * 
     */
    public getAllBooks(extraHttpRequestParams?: any): Observable<{}> {
        return this.getAllBooksWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update book by ID
     * Updates details of a Book
     * @param id ID of book to update
     */
    public updateBookById(id: number, book:Book, extraHttpRequestParams?: any) {
        return this.updateBookByIdWithHttpInfo(id, book, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Posts a new Book to shelf
     * 
     * @param book book to be added
     */
    public addBookWithHttpInfo(book?: Book, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/book`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: book == null ? '' : JSON.stringify(book), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete book by ID
     * Deleted a Book
     * @param id ID of book to delete
     */
    public deleteBookByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/book/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteBookById.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headers.set('api_key', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Gets all the Books
     * 
     */
    public getAllBooksWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/book`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update book by ID
     * Updates details of a Book
     * @param id ID of book to update
     */
    public updateBookByIdWithHttpInfo(id: number, book:Book, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/book/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateBookById.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headers.set('api_key', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: book == null ? '' : JSON.stringify(book), 
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}