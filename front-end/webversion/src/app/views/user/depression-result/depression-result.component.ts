import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-depression-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depression-result.component.html',
  styleUrl: './depression-result.component.css'
})
export class DepressionResultComponent {
  @Input() score: number = 0;
}
