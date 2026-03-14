import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
@Component({
   standalone: true,
   imports: [PresentationComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


}
