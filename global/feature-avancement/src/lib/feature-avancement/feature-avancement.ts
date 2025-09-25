import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';
import { PrimeIcons } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';

@Component({
  selector: 'global-feature-avancement',
  imports: [CommonModule, MeterGroup, Card],
  templateUrl: './feature-avancement.html',
  styleUrl: './feature-avancement.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAvancement {
  avancement = [
    {
      label: 'Architecture',
      color1: '#34d399',
      color2: '#fbbf24',
      value: 50,
      icon: PrimeIcons.BOX,
    },
    {
      label: 'Nx Projects',
      color1: '#fbbf24',
      color2: '#60a5fa',
      value: 20,
      icon: PrimeIcons.COG,
    },
    {
      label: 'Nx Cloud',
      color1: '#60a5fa',
      color2: '#60a5fa',
      value: 10,
      icon: PrimeIcons.CLOUD,
    },
  ];
  protected readonly Math = Math;
}
