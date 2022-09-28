import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Restaurant[]>("http://localhost:8080/restaurant");
  }
  create(payload: Restaurant) {
    return this.http.post<Restaurant>('http://localhost:3000/restaurant', payload);
  }
  getById(id: number) {
    return this.http.get<Restaurant>(`http://localhost:3000/restaurant/${id}`);
  }
  update(payload: Restaurant) {
    return this.http.put(`http://localhost:3000/restaurant/${payload.id}`, payload);
  }
  delete(id: number) {
    return this.http.delete<Restaurant>(`http://localhost:3000/restaurant/${id}`);
    /*[
     {
      id:1,
      name:"TONTON",
      imageUrl:'Users\user\Desktop\JekFoodFE-main\JekFoodFE-main',
      address:" centre ville sfax ",
      phone:22023456,
     },

     {
      id:2,
      name:"PRINGLESS",
      imageUrl:'assets/img/gallery/gallery-8.jpg',
      address:"  cite nasria sfax ",
      phone:23023666,
     },
     
     {
      id:3,
      name:"MECHMECHA",
      imageUrl:'assets/img/gallery/gallery-3.jpg',
      address:"  pres de lyceé hedi souissi sfax ",
      phone:55023555,
     },

     {
      id:4,
      name:"BON PLAN",
      imageUrl:'assets/img/gallery/gallery-2.jpg',
      address:"  route gremda 5km sfax ",
      phone:57023776,
     },
     
     

    ]*/
  }
}
