import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  backgroundColor: string = '';
  fontColor: string = '';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Subscribe to the router events to detect navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Change the entire body's background and font color based on the route
        if (this.router.url.includes('/contact') || this.router.url.includes('/projects')) {
          this.renderer.setStyle(document.body, 'backgroundColor', '#57270b');  // Contact page background
          this.renderer.setStyle(document.body, 'color', '#fffbeb');  // Contact page font color
        } else if (this.router.url.includes('/')) {
          this.renderer.setStyle(document.body, 'backgroundColor', '#fffbeb');  // About page background
          this.renderer.setStyle(document.body, 'color', '#57270b');  // About page font color
        } else {
          this.renderer.setStyle(document.body, 'backgroundColor', '#ffffff');  // Default background
          this.renderer.setStyle(document.body, 'color', '#000000');  // Default font color
        }
      }
    });
  }
}
