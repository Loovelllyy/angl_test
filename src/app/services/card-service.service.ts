import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICard} from "../Interfaces";


@Injectable({
  providedIn: 'root'
})

export class CardServiceService {

  constructor(private http: HttpClient) { }

  getCoinCard(): Observable<ICard[]> {
    return this.http.get<ICard[]>("https://jsonplaceholder.typicode.com/photos?_limit=4");
  }
}
