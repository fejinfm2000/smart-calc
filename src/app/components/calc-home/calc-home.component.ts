import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ICalories } from '../../models/calculator';

@Component({
  selector: 'app-calc-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTooltipModule, MatDialogModule, MatButtonModule],
  templateUrl: './calc-home.component.html',
  styleUrl: './calc-home.component.scss'
})
export class CalcHomeComponent implements AfterViewInit, OnInit {
  @ViewChild('bmiTemplate') bmiTemplate!: TemplateRef<any>;
  @ViewChild('calorieTemplate') calorieTemplate!: TemplateRef<any>;
  @ViewChild('idealWeightTemplate') idealWeightTemplate!: TemplateRef<any>;
  @ViewChild('waterIntakeTemplate') waterIntakeTemplate!: TemplateRef<any>;
  @ViewChild('heartRateTemplate') heartRateTemplate!: TemplateRef<any>;
  @ViewChild('ingredientCalculatorTemplate') ingredientCalculatorTemplate!: TemplateRef<any>;
  @ViewChild('mealCalorieTemplate') mealCalorieTemplate!: TemplateRef<any>;
  @ViewChild('nutritionTemplate') nutritionTemplate!: TemplateRef<any>;
  @ViewChild('calorieDistributionTemplate') calorieDistributionTemplate!: TemplateRef<any>;
  catagories: ICalories[] = [];
  searchControl = new FormControl('');
  isInfo: boolean = false;

  ingredients = [
    { name: 'Flour', unit: 'g' },
    { name: 'Sugar', unit: 'g' },
    { name: 'Milk', unit: 'ml' }
  ];

  foodItems = [
    { name: 'Rice', caloriesPerUnit: 130 },
    { name: 'Chicken', caloriesPerUnit: 165 },
    { name: 'Broccoli', caloriesPerUnit: 55 },
    { name: 'Olive Oil', caloriesPerUnit: 119 }
  ];

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bmiForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]]
    });
    this.calorieForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['male', Validators.required],
      activity: ['1.2', Validators.required]
    });
    this.idealWeightForm = this.fb.group({
      height: [null, [Validators.required, Validators.min(1)]],
      gender: ['male', Validators.required],
    });

    this.waterForm = this.fb.group({
      weight: [null, [Validators.required, Validators.min(1)]],
      activityLevel: ['moderate', Validators.required],
    });

    this.hrForm = this.fb.group({
      age: [null, [Validators.required, Validators.min(1)]],
      restingHR: [null]
    });

    this.ingredientForm = this.fb.group({
      servings: [1, [Validators.required, Validators.min(1)]],
      quantity0: [0, Validators.required],
      quantity1: [0, Validators.required],
      quantity2: [0, Validators.required]
    });

    this.mealForm = this.fb.group({
      rice: [0, [Validators.required, Validators.min(0)]],
      chicken: [0, [Validators.required, Validators.min(0)]],
      broccoli: [0, [Validators.required, Validators.min(0)]],
      oil: [0, [Validators.required, Validators.min(0)]]
    });

    this.nutritionForm = this.fb.group({
      totalCalories: [null, [Validators.required, Validators.min(1)]],
      carbsPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      proteinPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      fatPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });

    this.calorieDistributionForm = this.fb.group({
      totalCalories: [null, [Validators.required, Validators.min(1)]],
      breakfastPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      lunchPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      dinnerPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      snacksPercent: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });

  }
  ngAfterViewInit(): void {
    this.catagories = [
      {
        title: "BMI",
        icon: "fas fa-weight-scale icons",
        template: this.bmiTemplate,
        width: "80%",
        height: "90%",
      },
      {
        title: "Calorie Needs",
        icon: "fas fa-fire icons",
        template: this.calorieTemplate,
      },
      {
        title: "Ideal Weight",
        icon: "fas fa-balance-scale icons",
        template: this.idealWeightTemplate,
      },
      {
        title: "Water Intake",
        template: this.waterIntakeTemplate,
        icon: "fas fa-tint icons"
      },
      {
        title: "Heart Rate Zone",
        template: this.heartRateTemplate,
        icon: "fas fa-heart-pulse icons"
      },
      {
        title: "Ingredient Quantity",
        template: this.ingredientCalculatorTemplate,
        icon: "fas fa-scale-balanced icons"
      },
      {
        title: "Meal Calorie Estimator",
        template: this.mealCalorieTemplate,
        icon: "fas fa-drumstick-bite icons"
      },
      {
        title: "Nutrition Split",
        template: this.nutritionTemplate,
        icon: "fas fa-chart-pie icons"
      },
      {
        title: "Daily Calorie Distribution",
        template: this.calorieDistributionTemplate,
        icon: "fas fa-clock icons"
      },
      {
        title: "Grocery Cost Estimator",
        icon: "fas fa-cart-shopping icons"
      },
      {
        title: "Power Consumption Estimator",
        icon: "fas fa-bolt icons"
      },
      {
        title: "Battery Life Estimator",
        icon: "fas fa-battery-full icons"
      },
      {
        title: "Appliance Lifespan Cost Estimator",
        icon: "fas fa-cogs icons"
      },
      {
        title: "Fuel Cost",
        icon: "fas fa-gas-pump icons"
      },
      {
        title: "Trip Duration Estimator",
        icon: "fas fa-road icons"
      },
      {
        title: "CO₂ Emissions Estimator",
        icon: "fas fa-leaf icons"
      },
      {
        title: "Toll & Expense Split Calculator",
        icon: "fas fa-hand-holding-usd icons"
      },
      {
        title: "Monthly Expense ",
        icon: "fas fa-wallet icons"
      },
      {
        title: "Loan EMI",
        icon: "fas fa-calculator icons"
      },
      {
        title: "Savings Growth",
        icon: "fas fa-piggy-bank icons"
      },
      {
        title: "Rent vs Buy ",
        icon: "fas fa-home icons"
      },
      {
        title: "Mortgage ",
        icon: "fas fa-house-user icons"
      },
      {
        title: "Data Usage",
        icon: "as fa-wifi icons"
      },
      {
        title: "Phone Plan Cost",
        icon: "fas fa-mobile-alt icons"
      },
      {
        title: "Tech Lifespan ROI",
        icon: "fas fa-chart-line icons"
      }
    ];
    this.cdr.detectChanges();
  }


  get filteredItems() {
    const query = this.searchControl.value?.toLowerCase() || '';
    return this.catagories.filter(item => item.title.toLowerCase().includes(query)).map(data => { return { ...data, color: this.getRandomColor() } });
  }



  openDialog(template?: TemplateRef<any>, width: string = "80%", height: string = "80%"): void {
    console.log(template);

    if (template) {
      this.dialog.open(template, {
        width,
        height,
        disableClose: true
      });
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomTealColor(): string {
    const hue = 180 + Math.floor(Math.random() * 20); // 180–200 = teal
    const saturation = 60 + Math.floor(Math.random() * 20); // more or less vivid
    const lightness = 40 + Math.floor(Math.random() * 20);  // brightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  bmiForm!: FormGroup;
  bmi: number | null = null;
  bmiStatus: string = '';

  calculateBMI(): void {
    const { weight, height } = this.bmiForm.value;
    const heightInMeters = height / 100;
    this.bmi = weight / (heightInMeters * heightInMeters);

    if (this.bmi < 18.5) {
      this.bmiStatus = 'Underweight';
    } else if (this.bmi < 24.9) {
      this.bmiStatus = 'Normal weight';
    } else if (this.bmi < 29.9) {
      this.bmiStatus = 'Overweight';
    } else {
      this.bmiStatus = 'Obese';
    }
  }

  calorieForm!: FormGroup;
  bmr: number | null = null;
  tdee: number | null = null;


  calculateCalories(): void {
    const { weight, height, age, gender, activity } = this.calorieForm.value;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const factor = parseFloat(activity);

    // Mifflin-St Jeor Equation
    if (gender === 'male') {
      this.bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      this.bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    this.tdee = this.bmr * factor;
  }

  idealWeightForm!: FormGroup;
  idealWeight: number = 0;

  calculateIdealWeight(): void {
    const { gender, height } = this.idealWeightForm.value;
    const heightInInches = height / 2.54;
    const extraInches = Math.max(0, heightInInches - 60);
    this.idealWeight = +(gender === 'male'
      ? 50 + 2.3 * extraInches
      : 45.5 + 2.3 * extraInches
    ).toFixed(1);
  }

  waterForm!: FormGroup;
  recommendedIntake: number = 0;

  calculateWaterIntake(): void {
    const { weight, activityLevel } = this.waterForm.value;
    let multiplier = 0.033; // default for moderate activity

    if (activityLevel === 'low') {
      multiplier = 0.03;
    } else if (activityLevel === 'high') {
      multiplier = 0.04;
    }

    this.recommendedIntake = +(weight * multiplier).toFixed(2);
  }

  hrForm!: FormGroup;
  zones: { [key: string]: string } | null = null;


  calculateZones(): void {
    const { age, restingHR } = this.hrForm.value;
    const maxHR = 220 - age;
    let base = restingHR ? maxHR - restingHR : maxHR;

    const calc = (minPct: number, maxPct: number) => {
      const min = restingHR
        ? Math.round(restingHR + base * minPct)
        : Math.round(maxHR * minPct);
      const max = restingHR
        ? Math.round(restingHR + base * maxPct)
        : Math.round(maxHR * maxPct);
      return `${min} - ${max}`;
    };

    this.zones = {
      zone1: calc(0.5, 0.6),   // Warm-up
      zone2: calc(0.6, 0.7),   // Fat burn
      zone3: calc(0.7, 0.8),   // Cardio
      zone4: calc(0.8, 0.9),   // Hardcore
      zone5: `${Math.round(restingHR ? restingHR + base * 0.9 : maxHR * 0.9)}+`
    };
  }

  calculatedIngredients: any[] = [];
  ingredientForm !: FormGroup;

  calculateQuantities() {
    const servings = this.ingredientForm.value.servings;
    this.calculatedIngredients = this.ingredients.map((ingredient, i) => ({
      name: ingredient.name,
      unit: ingredient.unit,
      total: this.ingredientForm.value['quantity' + i] * servings
    }));
  }

  totalCalories: number | null = null;
  mealForm !: FormGroup;

  calculateMealCalories() {
    const values = this.mealForm.value;
    this.totalCalories =
      values.rice * 130 +
      values.chicken * 165 +
      values.broccoli * 55 +
      values.oil * 119;
  }

  nutritionForm!: FormGroup;
  macros = {
    carbs: 0,
    protein: 0,
    fat: 0
  };

  calculateNutritionSplit(): void {
    const { totalCalories, carbsPercent, proteinPercent, fatPercent } = this.nutritionForm.value;
    const totalPercent = carbsPercent + proteinPercent + fatPercent;

    if (totalPercent !== 100) {
      alert('The macronutrient percentages must add up to 100%.');
      return;
    }

    this.macros = {
      carbs: +((totalCalories * (carbsPercent / 100)) / 4).toFixed(1),
      protein: +((totalCalories * (proteinPercent / 100)) / 4).toFixed(1),
      fat: +((totalCalories * (fatPercent / 100)) / 9).toFixed(1)
    };
  }

  calorieDistributionForm!: FormGroup;
  calorieSplit = {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snacks: 0
  };

  calculateCalorieSplit(): void {
    const {
      totalCalories,
      breakfastPercent,
      lunchPercent,
      dinnerPercent,
      snacksPercent
    } = this.calorieDistributionForm.value;

    const totalPercent = breakfastPercent + lunchPercent + dinnerPercent + snacksPercent;

    if (totalPercent !== 100) {
      alert('Meal percentages must add up to 100%.');
      return;
    }

    this.calorieSplit = {
      breakfast: +((totalCalories * (breakfastPercent / 100)).toFixed(1)),
      lunch: +((totalCalories * (lunchPercent / 100)).toFixed(1)),
      dinner: +((totalCalories * (dinnerPercent / 100)).toFixed(1)),
      snacks: +((totalCalories * (snacksPercent / 100)).toFixed(1))
    };
  }

  close(dialogRef: any) {
    dialogRef.close();
    this.bmiForm.reset()
    this.bmi = 0;
    this.bmiStatus = '';
    this.isInfo = false
    this.calorieForm.reset();
    this.bmr = null;
    this.tdee = null;
    this.idealWeightForm.reset({ gender: 'male' });
    this.idealWeight = 0;
    this.waterForm.reset({ activityLevel: 'moderate' });
    this.recommendedIntake = 0;
    this.hrForm.reset();
    this.zones = null;
  }
}
