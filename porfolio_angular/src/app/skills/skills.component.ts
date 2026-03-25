import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../Services/Translation.service';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule],
})
export class SkillsComponent {
  private translation = inject(TranslationService);

  t(key: string): string {
    return this.translation.t(key);
  }

  skills = [
    {
      captionKey: 'skills.backendCaption',
      icon: '⚙️',
      catKey: 'skills.backendCat',
      titleKey: 'skills.backendTitle',
      bars: [
        { label: 'Java', w: 90 },
        { label: 'Spring Boot', w: 85 },
        { label: 'Python/Flask', w: 70 },
        { label: 'Laravel/PHP', w: 65 },
      ],
    },
    {
      captionKey: 'skills.frontendCaption',
      icon: '🎨',
      catKey: 'skills.frontendCat',
      titleKey: 'skills.frontendTitle',
      bars: [
        { label: 'React', w: 82 },
        { label: 'Angular', w: 75 },
        { label: 'TypeScript', w: 78 },
        { label: 'Next.js', w: 60 },
      ],
    },
    {
      captionKey: 'skills.dbCaption',
      icon: '🗄️',
      catKey: 'skills.dbCat',
      titleKey: 'skills.dbTitle',
      bars: [
        { label: 'PostgreSQL', w: 82 },
        { label: 'MySQL', w: 80 },
        { label: 'MongoDB', w: 60 },
        { label: 'Oracle', w: 55 },
      ],
    },
    {
      captionKey: 'skills.devopsCaption',
      icon: '🛠️',
      catKey: 'skills.devopsCat',
      titleKey: 'skills.devopsTitle',
      bars: [
        { label: 'Docker', w: 75 },
        { label: 'Kafka', w: 65 },
        { label: 'Git/JIRA', w: 88 },
        { label: 'Nginx', w: 55 },
      ],
    },
  ];
}
