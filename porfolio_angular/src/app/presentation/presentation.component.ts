import { Component, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../Services/Translation.service';

@Component({
  standalone: true,
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  imports: [CommonModule],
})
export class PresentationComponent implements OnInit {
  private translation = inject(TranslationService);

  displayedName = '';
  displayedSummary = '';
  nameDone = false;
  summaryDone = false;

  t(key: string): string {
    return this.translation.t(key);
  }

  ngOnInit() {
    setTimeout(() => this.typeName(), 1400);

 
    effect(() => {
      const _ = this.translation.currentLang(); 
      if (this.nameDone) {
        this.displayedSummary = '';
        this.summaryDone = false;
        setTimeout(() => this.typeSummary(), 400);
      }
    });
  }

  private typeName() {
    const text = 'FANOMEZANTSOA';
    let i = 0;
    const iv = setInterval(() => {
      this.displayedName += text[i++];
      if (i >= text.length) {
        clearInterval(iv);
        this.nameDone = true;
        setTimeout(() => this.typeSummary(), 800);
      }
    }, 72);
  }

  private typeSummary() {
    const text = this.translation.t('hero.summary');
    let i = 0;
    this.displayedSummary = '';
    this.summaryDone = false;
    const iv = setInterval(() => {
      this.displayedSummary += text[i++];
      if (i >= text.length) {
        clearInterval(iv);
        this.summaryDone = true;
      }
    }, 26);
  }
}