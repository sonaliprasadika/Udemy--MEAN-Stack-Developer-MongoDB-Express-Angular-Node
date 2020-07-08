import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // create instanse of http
  constructor( private http: Http ) { }

  // method for getting things from backend
  getShoppingItems(){

    return this.http
    .get('http://localhost:3000/api/items').pipe(
      map(res => res.json()));
  }

  // method to add(Insert) data to database
  addShoppingItems(newItem){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http
    .post('http://localhost:3000/api/item', newItem, {headers: headers}).pipe(
      map(res =>res.json()));//mapping respose from our backend as jason
  }

  deleteShoppingItem(id){
    return this.http
    .delete('http://localhost:3000/api/item/' +id).pipe(
      map(res =>res.json()));
    
  }

  updateShoppingItems(newItem){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http
    .put('http://localhost:3000/api/item/'+newItem._id, newItem, {headers: headers}).pipe(
      map(res =>res.json()));//mapping respose from our backend as jason
  }
  
}
