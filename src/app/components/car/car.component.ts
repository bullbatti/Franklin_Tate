import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  @Input() car!: Car;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  
    // Dopo 4 secondi, imposta visible a false
    setTimeout(() => {
      this.visible = false;
    }, 3500); // 4000 millisecondi = 4 secondi
  }
}
