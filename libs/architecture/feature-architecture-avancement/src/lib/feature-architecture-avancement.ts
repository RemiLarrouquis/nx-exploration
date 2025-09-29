import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  DesignationExploration,
  ExplorationService,
  Objectif,
} from '@nx-exploration/data-suivi-avancement';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'architecture-feature-architecture-avancement',
  imports: [CommonModule, TableModule],
  templateUrl: './feature-architecture-avancement.html',
  styleUrl: './feature-architecture-avancement.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureArchitectureAvancement implements OnInit {
  objectifs: Objectif[] = [];

  explorationService = inject(ExplorationService);

  ngOnInit(): void {
    this.objectifs = this.explorationService
      .consulter(DesignationExploration.ARCHITECTURE)
      .recupererObjectifs();
  }
}
