import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class AboutComponent {

  skills = [
    { name: 'HTML', icon: '🏗️', category: 'Markup' },
    { name: 'CSS', icon: '🎨', category: 'Styling' },
    { name: 'JavaScript', icon: '⚡', category: 'Language' },
    { name: 'Angular', icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'C++', icon: '⚙️', category: 'Language' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Styling' },
    { name: 'Git', icon: '🔀', category: 'Tools' }
  ];

  experiences = [
    {
      title: 'Full-Stack Development',
      description: 'Building scalable frontend applications with Angular and TypeScript, integrating with backend APIs and databases',
      icon: '💻'
    },
    {
      title: 'Embedded Systems',
      description: 'Designing and developing hardware-software integrated systems with Arduino, ESP modules, and various sensors',
      icon: '⚙️'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-centered interfaces with Tailwind CSS and modern design principles for responsive applications',
      icon: '🎯'
    },
   
  ];

}