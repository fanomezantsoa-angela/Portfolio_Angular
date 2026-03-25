import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../Services/Translation.service';
@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule],
})
export class AboutComponent {
  private translation = inject(TranslationService);
 
  t(key: string): string {
    return this.translation.t(key);
  }
}
 