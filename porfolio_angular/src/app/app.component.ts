import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: 'app-root',
  template: `
   <main>
    
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
