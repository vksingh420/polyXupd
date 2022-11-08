import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3010';
const biomartGenesUrl = 'http://localhost:3010/gene/human/symbol/prefix/'

@Injectable({
  providedIn: 'root'
})
export class biomartGenesService {
  constructor(private http: HttpClient) { }

  // http://localhost:3011/gene/human/symbol/prefix/
  findByPrefix(prefix: any): Observable<any> {
    return this.http.get(`${biomartGenesUrl}${prefix}`, {responseType: 'text'});
    //return this.http.get(`${biomartGenesUrl}${prefix}`, {responseType: 'json'});
  }

}
