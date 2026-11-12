import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SaasHeroAnimation } from '../../shared/saas-hero-animation/saas-hero-animation';

@Component({
  selector: 'app-home',
  imports: [SaasHeroAnimation , CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
