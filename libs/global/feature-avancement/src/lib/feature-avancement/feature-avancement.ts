import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';
import { PrimeIcons } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import {
  DesignationExploration,
  ExplorationService,
} from '@nx-exploration/data-suivi-avancement';
import { CustomMeterItem } from './custom-meter-item';

@Component({
  selector: 'global-feature-avancement',
  imports: [CommonModule, MeterGroup, Card],
  templateUrl: './feature-avancement.html',
  styleUrl: './feature-avancement.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAvancement implements OnInit {
  protected readonly Math = Math;

  avancement: CustomMeterItem[] = [];

  private explorationService: ExplorationService = inject(ExplorationService);

  ngOnInit(): void {
    const expSignal = this.explorationService.consulter(
      DesignationExploration.SIGNAL,
    );
    const expArchi = this.explorationService.consulter(
      DesignationExploration.ARCHITECTURE,
    );
    const expProject = this.explorationService.consulter(
      DesignationExploration.NX_PROJECT,
    );
    const expCloud = this.explorationService.consulter(
      DesignationExploration.NX_CLOUD,
    );
    this.avancement.push(
      ...[
        {
          label: expSignal.titre,
          couleurDebut: '#fbbf24',
          couleurFin: '#34d399',
          value: expSignal.completion(),
          icon: PrimeIcons.BOLT,
        },
        {
          label: expArchi.titre,
          couleurDebut: '#34d399',
          couleurFin: '#245afb',
          value: expArchi.completion(),
          icon: PrimeIcons.BUILDING_COLUMNS,
        },
        {
          label: expProject.titre,
          couleurDebut: '#245afb',
          couleurFin: '#fa606d',
          value: expProject.completion(),
          icon: PrimeIcons.COG,
        },
        {
          label: expCloud.titre,
          couleurDebut: '#fa606d',
          couleurFin: '#fbbf24',
          value: expCloud.completion(),
          icon: PrimeIcons.CLOUD,
        },
      ],
    );
  }
}
