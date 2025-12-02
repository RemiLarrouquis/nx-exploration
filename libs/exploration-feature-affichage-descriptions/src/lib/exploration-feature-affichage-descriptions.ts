import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  DesignationCode,
  Exploration,
  ExplorationService,
  Objectif,
} from '@nx-exploration/exploration-data';
import { AvancementUiTimelineObjectifs } from '@nx-exploration/avancement-ui-timeline-objectifs';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'exploration-exploration-feature-affichage-descriptions',
  imports: [AvancementUiTimelineObjectifs, Divider],
  templateUrl: './exploration-feature-affichage-descriptions.html',
  styleUrl: './exploration-feature-affichage-descriptions.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorationFeatureAffichageDescriptions implements OnInit {
  explorations: Exploration[] = [];

  explorationService = inject(ExplorationService);

  ngOnInit(): void {
    this.explorations = this.explorationService.listerNonComplete();
  }
}
