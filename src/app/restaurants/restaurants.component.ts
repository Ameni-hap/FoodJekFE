import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { Restaurant } from '../shared/models/Restaurant';
declare var window: any;

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  restaurants! : Restaurant[];
  constructor(private restaurantService:RestaurantService ) { }

  ngOnInit(): void {
    
    this.get();
    
  }
  get() {
    this.restaurantService.getAll().subscribe((data) => {
      this.restaurants = data;
      console.log(data);
    });
  }
  

  
}
