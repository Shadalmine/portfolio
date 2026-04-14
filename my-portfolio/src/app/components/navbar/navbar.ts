import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    // Close mobile menu first
    this.closeMenu();
    
    // Small delay to allow route change
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  navigateAndScroll(sectionId: string): void {
    // Navigate to home first
    this.router.navigate(['/home']).then(() => {
      // Then scroll to section
      setTimeout(() => {
        this.scrollToSection(sectionId);
      }, 300);
    });
  }
}