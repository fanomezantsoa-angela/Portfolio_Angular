import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Lang } from '../../Services/Translation.service';
import { PresentationComponent } from '../presentation/presentation.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    PresentationComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactsComponent,
  ],
})
export class HomeComponent implements AfterViewInit {
  private translation = inject(TranslationService);
  currentLang = this.translation.currentLang;

  t(key: string): string {
    return this.translation.t(key);
  }

  setLang(lang: Lang) {
    this.translation.setLang(lang);
  }

  ngAfterViewInit() {
    this.initLeaves();
    this.initScrollObserver();
  }

  private initLeaves() {
    const canvas = document.getElementById('leafCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = [
      'rgba(255,125,0,0.48)',
      'rgba(255,155,40,0.38)',
      'rgba(200,90,0,0.32)',
      'rgba(255,180,80,0.26)',
    ];

    const leaves = Array.from({ length: 18 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * -400,
      vy: 0.3 + Math.random() * 0.55,
      vx: (Math.random() - 0.5) * 0.3,
      rot: Math.random() * Math.PI * 2,
      rs: (Math.random() - 0.5) * 0.015,
      sz: 5 + Math.random() * 8,
      al: 0.22 + Math.random() * 0.38,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      sw: Math.random() * Math.PI * 2,
      ss: 0.007 + Math.random() * 0.01,
      sa: 0.4 + Math.random() * 1.0,
    }));

    const drawLeaf = (x: number, y: number, sz: number, rot: number, al: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = al;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -sz);
      ctx.bezierCurveTo(sz * 0.7, -sz * 0.5, sz * 0.7, sz * 0.5, 0, sz * 0.3);
      ctx.bezierCurveTo(-sz * 0.7, sz * 0.5, -sz * 0.7, -sz * 0.5, 0, -sz);
      ctx.fill();
      ctx.globalAlpha = al * 0.3;
      ctx.strokeStyle = 'rgba(0,21,36,0.9)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -sz);
      ctx.lineTo(0, sz * 0.3);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach((l) => {
        l.sw += l.ss;
        l.x += l.vx + Math.sin(l.sw) * l.sa;
        l.y += l.vy;
        l.rot += l.rs;
        if (l.y > canvas.height + 20) {
          l.y = -20;
          l.x = Math.random() * canvas.width;
        }
        drawLeaf(l.x, l.y, l.sz, l.rot, l.al, l.c);
      });
      requestAnimationFrame(animate);
    };
    animate();
  }

  private initScrollObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseInt(el.dataset['delay'] || '0');
            setTimeout(() => {
              el.classList.add('visible');
              el.querySelectorAll<HTMLElement>('.stat-fill').forEach((bar) => {
                bar.style.width = (bar.dataset['w'] ?? '0') + '%';
              });
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    setTimeout(() => {
      document.querySelectorAll('.chapter-label, .manga-panel').forEach((el) =>
        observer.observe(el)
      );
    }, 300);
  }
}