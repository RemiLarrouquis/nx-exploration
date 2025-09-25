import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiMainMenu } from '@nx-exploration/ui-main-menu';
import { UiMainBar } from '@nx-exploration/ui-main-bar';
import { FeatureAvancement } from '@nx-exploration/feature-avancement';

@Component({
  imports: [RouterModule, UiMainMenu, UiMainBar, FeatureAvancement],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'nx-exploration';
}
