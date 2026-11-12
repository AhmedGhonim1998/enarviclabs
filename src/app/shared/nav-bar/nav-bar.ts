import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  isOpen = false;
  private elementRef = inject(ElementRef);

  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // منع انتقال الحدث عشان القائمة ما تقفلش فوراً
    this.isOpen = !this.isOpen;
  }

  // إغلاق القائمة عند الضغط في أي مكان خارج الـ Navbar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
}
}
