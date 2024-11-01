import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      name: 'Project One',
      description: 'An Angular web application for managing tasks and tracking productivity.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://example.com/project-one'
    },
    {
      name: 'Project Two',
      description: 'A Node.js API service for data processing and user authentication.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://example.com/project-two'
    },
    {
      name: 'Project Three',
      description: 'A responsive e-commerce website built with Angular and Bootstrap.',
      technologies: ['Angular', 'Bootstrap', 'Firebase'],
      link: 'https://example.com/project-three'
    },
    {
      name: 'Project Four',
      description: 'A responsive e-commerce website built with Angular and Bootstrap.',
      technologies: ['Angular', 'Bootstrap', 'Firebase'],
      link: 'https://example.com/project-three'
    },
    {
      name: 'Project Five',
      description: 'A responsive e-commerce website built with Angular and Bootstrap.',
      technologies: ['Angular', 'Bootstrap', 'Firebase'],
      link: 'https://example.com/project-three'
    },
    {
      name: 'Project Six',
      description: 'A responsive e-commerce website built with Angular and Bootstrap.',
      technologies: ['Angular', 'Bootstrap', 'Firebase'],
      link: 'https://example.com/project-three'
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
