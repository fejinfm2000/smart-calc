import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  numbers = Array.from({ length: 8 }, (_, i) => i);

  getNumberStyle(index: number, total: number): any {
    const angle = (360 / total) * index;
    const radiusPercent = 45; // Push further out from center
    const rad = (angle * Math.PI) / 180;

    const x = 50 + radiusPercent * Math.cos(rad);
    const y = 50 + radiusPercent * Math.sin(rad);

    return {
      top: `${y}%`,
      left: `${x}%`
    };
  }

}
