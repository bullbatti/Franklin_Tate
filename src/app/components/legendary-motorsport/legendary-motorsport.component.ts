import { Component, OnInit } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-legendary-motorsport',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './legendary-motorsport.component.html',
  styleUrl: './legendary-motorsport.component.css',
})
export class LegendaryMotorsportComponent implements OnInit {
  cars!: Car[];

  ngOnInit(): void {
    this.cars = [
      {
        name: 'Bugatti Chiron Pur Sport',
        price: '$3,000,000',
        max_speed: '218 mph',
        acceleration: '2.3 s (0-60 mph)',
        handling: '9.8',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMFaVI81dTniM_lPp6RHJvaatSyoUGRaQYA&s',
      },
      {
        name: 'McLaren 720S',
        price: '$299,000',
        max_speed: '212 mph',
        acceleration: '2.7 s (0-60 mph)',
        handling: '9.5',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox_YbD3OqOR7gpiC7CPyLsenDa55x0oGaGw&s',
      },
      {
        name: 'Ferrari 458 Italia',
        price: '$245,000',
        max_speed: '210 mph',
        acceleration: '3.0 s (0-60 mph)',
        handling: '9.2',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJD9qEkQhFGmOKbLs_u14jFLXm7npuAj-og&s',
      },
      {
        name: 'Bentley Continental GT',
        price: '$202,000',
        max_speed: '207 mph',
        acceleration: '3.3 s (0-60 mph)',
        handling: '8.8',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHwrkS2s-5rY9pFlBdv66mKbw3yylQ374-g&s',
      },
      {
        name: 'Porsche 911',
        price: '$115,000',
        max_speed: '191 mph',
        acceleration: '3.5 s (0-60 mph)',
        handling: '9.0',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0e70REmE1h-dnQiODFozdIGMuCFdoZIc4Q&s',
      },
      {
        name: 'Aston Martin Valhalla',
        price: '$1,300,000',
        max_speed: '217 mph',
        acceleration: '2.5 s (0-60 mph)',
        handling: '9.4',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Ferrari 812 Superfast',
        price: '$335,000',
        max_speed: '211 mph',
        acceleration: '2.9 s (0-60 mph)',
        handling: '9.1',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Rolls-Royce Wraith',
        price: '$343,000',
        max_speed: '155 mph',
        acceleration: '4.4 s (0-60 mph)',
        handling: '8.0',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'McLaren 765LT',
        price: '$358,000',
        max_speed: '205 mph',
        acceleration: '2.8 s (0-60 mph)',
        handling: '9.6',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Porsche GT Street',
        price: '$365,000',
        max_speed: '211 mph',
        acceleration: '3.0 s (0-60 mph)',
        handling: '9.3',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Mercedes S63 AMG Coupe',
        price: '$175,000',
        max_speed: '186 mph',
        acceleration: '3.4 s (0-60 mph)',
        handling: '8.7',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Aston Martin DBS Superleggera',
        price: '$316,000',
        max_speed: '211 mph',
        acceleration: '3.2 s (0-60 mph)',
        handling: '9.0',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Lamborghini Huracán',
        price: '$208,000',
        max_speed: '202 mph',
        acceleration: '2.9 s (0-60 mph)',
        handling: '9.2',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Mercedes B63 BRABUS',
        price: '$450,000',
        max_speed: '149 mph',
        acceleration: '4.7 s (0-60 mph)',
        handling: '7.8',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Aston Martin Vanquish S',
        price: '$298,000',
        max_speed: '201 mph',
        acceleration: '3.5 s (0-60 mph)',
        handling: '8.9',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'Mercedes-Maybach V-Class',
        price: '$160,000',
        max_speed: '140 mph',
        acceleration: '6.1 s (0-60 mph)',
        handling: '7.5',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        name: 'BMW M5 Competition',
        price: '$110,000',
        max_speed: '190 mph',
        acceleration: '3.1 s (0-60 mph)',
        handling: '8.8',
        image_url: 'https://picsum.photos/seed/picsum/200/300',
      },
    ];
  }
}
