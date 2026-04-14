import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from '../work-experience/work-experience';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WorkExperienceComponent],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  typedText = '';

  private words = ['Computer Engineer', 'UI/UX Designer', 'Frontend Developer', 'Problem Solver'];
  private wIndex = 0;
  private cIndex = 0;
  private deleting = false;
  private typingTimer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

  private startTyping(): void {
    const current = this.words[this.wIndex];

    if (!this.deleting) {
      this.typedText = current.substring(0, this.cIndex + 1);
      this.cIndex++;
      this.cdr.detectChanges();

      if (this.cIndex === current.length) {
        this.typingTimer = setTimeout(() => {
          this.deleting = true;
          this.startTyping();
        }, 2000);
        return;
      }

    } else {
      this.typedText = current.substring(0, this.cIndex - 1);
      this.cIndex--;
      this.cdr.detectChanges();

      if (this.cIndex === 0) {
        this.deleting = false;
        this.wIndex = (this.wIndex + 1) % this.words.length;
      }
    }

    const speed = this.deleting ? 60 : 100;
    this.typingTimer = setTimeout(() => this.startTyping(), speed);
  }
}