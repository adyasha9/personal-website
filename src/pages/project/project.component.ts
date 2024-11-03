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
      name: 'NIDS',
      description: 'An application created to monitor network traffic and detect any attacks.',
      technologies: ['Python', 'Scapy (for packet analysis)', 'Snort (for intrusion detection)'],
      link: ''
    },
    {
      name: 'SmartResume: Automated Resume Tailoring Tool',
      description: 'A tool for tailoring resumes to match job descriptions, improving ATS scores.',
      technologies: ['Python (NLP)', 'Flask (backend)', 'React (UI)', 'Jinja2 (templating)'],
      link: ''
    },
    {
      name: 'Facial Recognition Tool',
      description: 'An application for identifying and verifying faces, using machine learning techniques.',
      technologies: ['Python', 'OpenCV (image processing)', 'TensorFlow (ML)', 'Django (backend)', 'HTML/CSS (frontend)'],
      link: ''
    },
    {
      name: 'Mixtape Maker',
      description: 'A tool that allows users to create, edit, and share music playlists.',
      technologies: ['Angular', 'Bootstrap (UI)', 'Firebase (database and authentication)', 'HTML/CSS'],
      link: ''
    },
    {
      name: 'E-COMMERCE',
      description: 'A shopping application created which allows users to browse and buy products.',
      technologies: ['React JS','Node.js', 'Express', 'MongoDB (database)', 'JWT (authentication)'],
      link: ''
    },
    {
      name: 'Movie Search Application',
      description: 'A web app for searching movies and retrieving details using a third-party API.',
      technologies: ['React', 'Bootstrap (responsive design)', 'OMDb API (movie data)'],
      link: ''
    }
  ];
  

  constructor() { }

  ngOnInit(): void {}
}
