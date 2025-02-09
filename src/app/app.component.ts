import {Component, inject} from '@angular/core';
import {Step1Component} from './step1/step1.component';
import {ConfiguratorService} from './configurator.service';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Step1Component, RouterOutlet, RouterLink],
  templateUrl: "app.component.html",
})
export class AppComponent {
  service = inject(ConfiguratorService);

}
