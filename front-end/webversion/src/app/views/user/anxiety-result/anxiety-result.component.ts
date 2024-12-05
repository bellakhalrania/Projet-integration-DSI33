import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anxiety-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anxiety-result.component.html',
  styleUrl: './anxiety-result.component.css'
})
export class AnxietyResultComponent {
[x: string]: any;
  @Input() score: number = 0;
}
