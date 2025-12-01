import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  DesignationCode,
  ExplorationService,
  Objectif,
} from '@nx-exploration/exploration-data';
import { TableModule } from 'primeng/table';
import { AvancementFeatureSynthese } from '@nx-exploration/avancement-feature-synthese';
import { AvancementUiTimelineObjectifs } from '@nx-exploration/avancement-ui-timeline-objectifs';

@Component({
  selector: 'pilotage-architecture-feature-avancement',
  imports: [
    TableModule,
    AvancementFeatureSynthese,
    AvancementUiTimelineObjectifs,
  ],
  templateUrl: './architecture-feature-avancement.html',
  styleUrl: './architecture-feature-avancement.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureFeatureAvancement implements OnInit {
  objectifs: Objectif[] = [];

  explorationService = inject(ExplorationService);

  ngOnInit(): void {
    this.objectifs = this.explorationService
      .consulter(DesignationCode.ARCHITECTURE)
      .recupererObjectifs();
  }
}
