import { Component, inject, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../Services/Translation.service';

@Component({
  standalone: true,
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  imports: [CommonModule],
})
export class PresentationComponent implements OnInit, OnDestroy {
  private translation = inject(TranslationService);

  displayedName = '';
  displayedSummary = '';
  nameDone = false;
  summaryDone = false;

  private summaryInterval: any = null;
  private nameInterval: any = null;

  constructor() {
    effect(() => {
      const _ = this.translation.currentLang(); 
      if (this.nameDone) {
        this.displayedSummary = '';
        this.summaryDone = false;
     
     
        setTimeout(() => this.typeSummary(), 400);
      }
    });
  }

  t(key: string): string {
    return this.translation.t(key);
  }

  ngOnInit() {
    setTimeout(() => this.typeName(), 1400);
  }

  ngOnDestroy() {
   
    clearInterval(this.summaryInterval);
    clearInterval(this.nameInterval);
  }

  private typeName() {
    const text = 'FANOMEZANTSOA';
    let i = 0;
    this.nameInterval = setInterval(() => {
      this.displayedName += text[i++];
      if (i >= text.length) {
        clearInterval(this.nameInterval);
        this.nameDone = true;
        setTimeout(() => this.typeSummary(), 800);
      }
    }, 72);
  }

  private typeSummary() {
  
    clearInterval(this.summaryInterval);

    const text = this.translation.t('hero.summary');
    let i = 0;
    this.displayedSummary = '';
    this.summaryDone = false;

    this.summaryInterval = setInterval(() => {
      this.displayedSummary += text[i++];
      if (i >= text.length) {
        clearInterval(this.summaryInterval);
        this.summaryDone = true;
      }
    }, 26);
  }
}