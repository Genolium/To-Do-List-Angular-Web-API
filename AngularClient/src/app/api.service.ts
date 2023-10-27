import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from './to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = "https://localhost:5199/api/ToDo";

  constructor(public httpClient: HttpClient) { }

  public getItems(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public createItem(item: ToDoItem): Observable<any> {
    return this.httpClient.post<ToDoItem>(this.baseUrl, item);
  }
  
  public updateItem(id: any, item: ToDoItem): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + id, item);
  }
  
  public deleteItem(id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

  public dateToStr(date: Date): String{
    let customDate : Date;
    customDate = new Date(date.toString());
    let month: Number;
    month = customDate.getUTCMonth()+1
    return customDate.getUTCDate() + "." + month + "." + customDate.getUTCFullYear();
  }

  public dateToInputStr(date: Date): string{
    let customDate : Date;
    customDate = new Date(date.toString());
    let month: Number;
    month = customDate.getUTCMonth()+1
    return customDate.getUTCFullYear() + "-" + month+ "-" + customDate.getUTCDate();
  }
}
