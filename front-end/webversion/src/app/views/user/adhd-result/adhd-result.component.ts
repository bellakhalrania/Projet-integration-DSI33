import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adhd-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adhd-result.component.html',
  styleUrl: './adhd-result.component.css'
})
export class AdhdResultComponent {
  @Input() score: number = 0;
}
