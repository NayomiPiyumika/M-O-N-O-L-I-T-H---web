import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('luxury-web');

projects = [
    {
      title: 'THE NORDIC SUITE',
      location: 'Stockholm, SE',
      category: 'RESIDENTIAL',
      description: 'A minimalist residential escape featuring natural light and organic textures for modern living.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      size: 'large'
    },
    {
      title: 'MODERN MINIMALIST',
      location: 'Tokyo, JP',
      category: 'RESIDENTIAL',
      description: 'Clean lines and open spaces redefined as a quiet urban sanctuary in the heart of the city.',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
      size: 'small'
    },
    {
      title: 'THE MONOLITH OFFICE',
      location: 'London, UK',
      category: 'COMMERCIAL',
      description: 'A high-end commercial workspace designed to foster creativity through architectural integrity.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      size: 'medium'
    }
];
}
