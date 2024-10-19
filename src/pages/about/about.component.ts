import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  downloadResume() {
    console.log('button click')
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; 
    link.download = 'Adyasha_Resume.pdf';
    link.click();
  }
}
