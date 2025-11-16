import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutUiMainBar } from '@nx-exploration/layout-ui-main-bar';
import { LayoutUiMainMenu } from '@nx-exploration/layout-ui-main-menu';
import { AvancementFeatureSynthese } from '@nx-exploration/avancement-feature-synthese';

@Component({
  imports: [
    RouterModule,
    LayoutUiMainBar,
    LayoutUiMainMenu,
    AvancementFeatureSynthese,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'nx-exploration';
}
