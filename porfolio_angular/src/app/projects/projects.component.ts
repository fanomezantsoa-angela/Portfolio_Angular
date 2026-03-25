import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../Services/Translation.service';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule],
})
export class ProjectsComponent {
  private translation = inject(TranslationService);

  t(key: string): string {
    return this.translation.t(key);
  }
}