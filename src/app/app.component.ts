import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SummaryComponent } from './summary/summary.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
