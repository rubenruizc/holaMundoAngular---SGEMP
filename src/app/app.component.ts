import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablapersonasComponent } from './components/tablapersonas/tablapersonas.component';
import { FormulariopersonaComponent } from './components/formulariopersona/formulariopersona.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TablapersonasComponent,FormulariopersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Amaro';
}
