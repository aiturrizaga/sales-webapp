import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  url: string = 'http://localhost:1337/api/products';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}?filters[active][$eq]=true`);
  }

  save(body: any) {
    return this.http.post(this.url, body);
  }

  update(id: any, body:any) {
    return this.http.put(`${this.url}/${id}`, body);
  }

}
