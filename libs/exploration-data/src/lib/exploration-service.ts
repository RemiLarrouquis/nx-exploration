import { Injectable } from '@angular/core';
import { initialisationExplorations } from './exploration-init';
import { Exploration } from './exploration-model';
import { DesignationCode } from './designation-code';

@Injectable({
  providedIn: 'root',
})
export class ExplorationService {
  totalElement(): number {
    return initialisationExplorations.length;
  }

  lister(): Exploration[] {
    return initialisationExplorations;
  }

  consulter(codeDesignation: DesignationCode): Exploration {
    const find = initialisationExplorations.find(
      (e) => e.designation.code === codeDesignation,
    );
    if (find) {
      return find;
    } else {
      return initialisationExplorations[0];
    }
  }
}
