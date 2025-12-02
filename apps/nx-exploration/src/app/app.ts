import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvancementFeatureSynthese } from '@nx-exploration/avancement-feature-synthese';

@Component({
  imports: [RouterModule, AvancementFeatureSynthese],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'nx-exploration';
}
