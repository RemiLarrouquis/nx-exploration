import { Injectable } from '@angular/core';
import { initialisationExplorations } from './exploration-init';
import { DesignationExploration } from './designation-exploration';
import { Exploration } from './exploration-model';

@Injectable({
  providedIn: 'root',
})
export class ExplorationService {
  totalElement(): number {
    return initialisationExplorations.length;
  }

  consulter(designation: DesignationExploration): Exploration {
    const find = initialisationExplorations.find(
      (e) => e.designation === designation,
    );
    if (find) {
      return find;
    } else {
      return initialisationExplorations[0];
    }
  }
}
