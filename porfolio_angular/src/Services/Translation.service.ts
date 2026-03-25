import { Injectable, signal, computed } from '@angular/core';
import * as Fr from '../assets/i18n/Fr.json';
import * as En from '../assets/i18n/En.json';

export type Lang = 'fr' | 'en';

const translations: Record<Lang, any> = { fr: Fr, en: En };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  currentLang = signal<Lang>('fr');

  setLang(lang: Lang) {
    this.currentLang.set(lang);
  }

  t(key: string): string {
    const keys = key.split('.');
    let val: any = translations[this.currentLang()];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  }
}