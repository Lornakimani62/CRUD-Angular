import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
   
  country
  data: Object[] = [];
   constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCountries();
  }
  public getCountries(): void{
    this.api.getCountries().subscribe(data => {
      console.log(data);
      this.country =data
    })
      
    }
  }


