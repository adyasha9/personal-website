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
        if (this.router.url.includes('/')) {
          this.renderer.setStyle(document.body, 'backgroundColor', '#e8eae3');  // About page background
          this.renderer.setStyle(document.body, 'color', '#373833');  // About page font color
        } else {
          this.renderer.setStyle(document.body, 'backgroundColor', '#e8eae3');  // Default background
          this.renderer.setStyle(document.body, 'color', '#373833');  // Default font color
        }
      }
    });
  }
}
