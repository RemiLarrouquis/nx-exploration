import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAvancement } from '@nx-exploration/feature-avancement';
import { LayoutUiMainBar } from '@nx-exploration/layout-ui-main-bar';
import { LayoutUiMainMenu } from '@nx-exploration/layout-ui-main-menu';

@Component({
  imports: [RouterModule, FeatureAvancement, LayoutUiMainBar, LayoutUiMainMenu],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'nx-exploration';
}
