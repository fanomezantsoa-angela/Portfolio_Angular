import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { ContactsComponent } from '../contacts/contacts.component';
@Component({
   standalone: true,
   imports: [PresentationComponent, ContactsComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


}
