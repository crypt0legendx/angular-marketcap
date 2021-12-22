import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { Http } from '@angular/common/http';
//  import 'rxjs/add/operator/catch';
import { Headers } from '@angular/http'
// import { catchError, map } from 'rxjs/operators';

//  import 'rxjs/add/operator/do';
//  import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class GotHttpService {
    private baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    constructor(private _http: HttpClient) {
    }


    getDetails(): any {
        
        let headers= new HttpHeaders();

        headers.append('X-CMC_PRO_API_KEY', '74b45c73-d6a3-4807-9b51-203d974ad3cb');
        let myResponse = this._http.get(this.baseUrl, { headers: headers }).subscribe(data => {
            console.log('data' + data)
        });

        return myResponse;
    }
}