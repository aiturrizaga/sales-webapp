import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get('http://localhost:1337/api/products');
  }

  save(body: any) {
    return this.http.post('http://localhost:1337/api/products', body);
  }

  update(id: any, body:any) {
    // return this.http.put('http://localhost:1337/api/products/' + id, body);
    return this.http.put(`http://localhost:1337/api/products/${id}`, body);
  }

}
