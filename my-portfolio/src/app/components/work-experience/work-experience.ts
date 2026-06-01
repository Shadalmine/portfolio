import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html'
})
export class WorkExperienceComponent {

  projects = [
    {
      title: 'UI/UX Design Intern',
      desc: 'Assisted in designing user interfaces for web/mobile applications, Collaborated with developers to improve user experience, and much more.',
      icon: '⭐',
      iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      link: 'https://github.com' // <-- Put your GitHub link here
    },
    {
      title: 'Autonomous Smart Sweeper Robot - Capstone Project',
      desc: 'Collaborated with a multidisciplinary team of engineers to integrate design with hardware functionality. Implemented control logic and assisted in hardware-software integration.',
      icon: '🌀',
      iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      link: 'https://github.com' // <-- Put the repository link here if you want
    },
    {
      title: 'Personal UI/UX Projects',
      desc: 'Designed modern UI concepts for web and mobile apps. Focused on improving user experience and visual hierarchy.',
      icon: '📱',
      iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      link: 'https://github.com' // <-- Put another relevant link here
    }
  ];

}