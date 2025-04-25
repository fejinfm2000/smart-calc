import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  constructor(private router: Router) { }

  catagory = [
    {
      path: 'food-calc',
      title: 'Food'
    },
    {
      path: 'health-care-calc',
      title: 'Health'
    },
    {
      path: 'electronics-calc',
      title: 'Electro'
    },
    {
      path: 'travel-calc',
      title: 'Travel'
    },
    {
      path: 'home-calc',
      title: 'Home'
    },
    {
      path: 'tech-calc',
      title: 'Tech'
    },
    {
      path: 'age-calc',
      title: 'Age'
    },
  ]
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

  pageNavigation(path?: string) {
    this.router.navigateByUrl(path ? path : "/calc-home")
  }

}
