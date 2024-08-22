import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() link!: string;
}
