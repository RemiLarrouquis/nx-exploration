import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Card } from 'primeng/card';
import { MeterGroup } from 'primeng/metergroup';
import { CustomMeterItem } from './custom-meter-item';
import {
  Exploration,
  ExplorationService,
} from '@nx-exploration/exploration-data';

@Component({
  selector: 'pilotage-avancement-feature-synthese',
  imports: [Card, MeterGroup],
  templateUrl: './avancement-feature-synthese.html',
  styleUrl: './avancement-feature-synthese.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvancementFeatureSynthese implements OnInit {
  protected readonly Math = Math;

  avancement: CustomMeterItem[] = [];
  totalExplorations = 1;

  private explorationService: ExplorationService = inject(ExplorationService);

  ngOnInit(): void {
    this.totalExplorations = this.explorationService.totalElement();
    console.log(this.totalExplorations);
    this.explorationService
      .lister()
      .forEach((exploration: Exploration, index: number) => {
        let indexSuivant = index + 1;
        if (indexSuivant >= this.totalExplorations) {
          indexSuivant = 0;
        }

        console.log(indexSuivant);
        console.log(exploration.designation.code);
        this.avancement.push({
          label: exploration.titre,
          couleurDebut: exploration.designation.couleur,
          couleurFin:
            this.explorationService.lister()[indexSuivant].designation.couleur,
          value: exploration.completion(),
          icon: exploration.designation.icon,
        });
      });
  }
}
