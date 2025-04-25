import { TemplateRef } from "@angular/core";

export interface ICalories {
    title: string,
    icon: string,
    template?: TemplateRef<any>,
    width?: string,
    height?: string,
}