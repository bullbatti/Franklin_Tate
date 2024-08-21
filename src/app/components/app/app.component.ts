import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() link!: string;

}
