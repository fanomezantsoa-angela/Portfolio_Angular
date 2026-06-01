import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: 'app-root',
  template: `
   <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <section class="content">
        <app-home />
      </section>
    </main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
