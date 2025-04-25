import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HealthCareCalcComponent } from './components/health-care-calc/health-care-calc.component';
import { FoodCalcComponent } from './components/food-calc/food-calc.component';
import { CalcHomeComponent } from './components/calc-home/calc-home.component';

export const routes: Routes = [
    {
        path: "smart-calc",
        component: MainLayoutComponent
    },
    {
        path: "health-care-calc",
        component: HealthCareCalcComponent
    },
    {
        path: "food-calc",
        component: FoodCalcComponent
    },
    {
        path: "calc-home",
        component: CalcHomeComponent
    },
    {
        path: '**',
        redirectTo: 'smart-calc'
    }
];
