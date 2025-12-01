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

@Component({
  selector: 'pilotage-architecture-feature-avancement',
  imports: [TableModule],
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
