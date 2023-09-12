import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers = Constants.API.API_HEADERS;
  constructor(private http : HttpClient) { }

  get(url : string, params? : any) {
    const headers = this.headers;
    return this.http.get(url, {params, headers});
  }

  getWithHeaders(url : string) {
    return this.http.get(url, {headers : Constants.API.SEARCH_HEADER});
  }

  post(url : string, params? : any) {
    const headers = this.headers;
    return this.http.post(url, {params, headers});
  }

  put(url : string, params? : any) {
    const headers = this.headers;
    return this.http.put(url, {params, headers});
  }

  delete(url : string, params? : any) {
    const headers = this.headers;
    return this.http.delete(url, {params, headers});
  }
}
