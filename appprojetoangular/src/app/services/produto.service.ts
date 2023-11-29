import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
   getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>("https://localhost:7217/Produto");
   }}