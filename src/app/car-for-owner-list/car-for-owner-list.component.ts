import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-for-owner-list',
  templateUrl: './car-for-owner-list.component.html',
  styleUrls: ['./car-for-owner-list.component.css']
})
export class CarForOwnerListComponent implements OnInit {
  owners: any[];
  cars: any;
  carsOwners: any[]= [];
  

  constructor( private ownerService: OwnerService, private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.getOwners();
    // this.getCars();
  }
  getOwners(){
    this.ownerService.getAll().subscribe(owners => {
      this.owners = owners['_embedded']['owners'];
      this.carService.getAll().subscribe(data => {
        this.cars = data;
        for (const car of this.cars) {
          for(const owner of this.owners){
            if(car['ownerDni'] == owner['dni']){
              this.carsOwners.push({car,owner})
              this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
            }
          }        
        }
        console.log(this.carsOwners);
        
      });      
    });
  }

  getCars(){
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        for(const owner of this.owners){
          if(car['ownerDni'] == owner['dni']){
            this.carsOwners.push({car,owner})
            this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          }
        }        
      }
      console.log(this.carsOwners);
      
    });
  }

}
