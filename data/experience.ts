export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Pendo',
    title: 'Lead Software Engineer',
    startDate: 'Jan 2024',
    endDate: 'Present',
    location: 'Raleigh, NC',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'Kafka',
      'RabbitMQ',
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'OpenAI/Azure OpenAI',
      'LangChain',
      'Vector DBs',
      'RAG',
      'Prometheus',
      'Grafana',
    ],
    highlights: [
      'Leading a full-stack team building core SaaS features and driving technical decisions',
      'Designing and implementing REST/GraphQL APIs with sophisticated multi-tenant behavior',
      'Architecting LLM-powered features including semantic search, intelligent summarization, and automation workflows',
      'Building RAG pipelines to extract insights from documentation, tickets, and usage data',
      'Implementing event-driven patterns for analytics, notifications, and background processing',
      'Managing cloud deployments and operations with strong DevOps standards and infrastructure as code',
      'Establishing testing, code review, observability, and security best practices across the team',
      'Partnering with product, design, and data teams on roadmaps and milestone planning',
    ],
  },
  {
    company: 'Cisco',
    title: 'Software Engineer',
    startDate: 'Nov 2021',
    endDate: 'Dec 2023',
    location: 'Remote',
    technologies: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Vue.js', 'Docker', 'Kubernetes'],
    highlights: [
      'Developed robust backend services and APIs for analytics and configuration management',
      'Built Vue.js frontends that consumed Django and Flask REST APIs with modern state management',
      'Implemented authentication, authorization, and audit logging patterns for enterprise security',
      'Deployed cloud-native applications with comprehensive observability and high availability',
    ],
  },
  {
    company: 'Self-Employed',
    title: 'Independent Full-Stack Engineer',
    startDate: 'Mar 2020',
    endDate: 'Oct 2021',
    location: 'Remote',
    technologies: [
      'React Native',
      'React',
      'Vue.js',
      'Node.js',
      'Express',
      'MongoDB',
      'GitHub Actions',
      'Vercel',
      'Netlify',
      'Third-party APIs',
    ],
    highlights: [
      'Delivered end-to-end mobile and web applications for diverse client needs',
      'Architected Node.js/Express backends with role-based access control and complex business logic',
      'Integrated payment processing, authentication, and notification services via third-party APIs',
      'Set up CI/CD pipelines and provided architectural guidance to help clients scale',
    ],
  },
  {
    company: 'Pendo',
    title: 'Software Engineer',
    startDate: 'May 2019',
    endDate: 'Feb 2020',
    location: 'Raleigh, NC',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'CI/CD'],
    highlights: [
      'Contributed to a multi-tenant SaaS analytics platform serving enterprise customers',
      'Built React/TypeScript interfaces connected to Express.js REST APIs',
      'Developed event ingestion and reporting endpoints for real-time analytics',
      'Collaborated with infrastructure and product teams on feature flags and deployment strategies',
    ],
  },
  {
    company: 'Red Hat',
    title: 'Full Stack Engineer',
    startDate: 'May 2017',
    endDate: 'May 2019',
    location: 'Raleigh, NC',
    technologies: ['.NET Core', 'PostgreSQL', 'REST', 'gRPC', 'React', 'Angular', 'Docker', 'Kubernetes'],
    highlights: [
      'Built full-stack solutions using .NET Core and PostgreSQL for enterprise applications',
      'Developed React and Angular frontends for complex enterprise dashboards and workflows',
      'Designed data access layers and managed database migrations for evolving schemas',
      'Containerized applications and deployed to Kubernetes clusters with CI/CD automation',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise (HPE)',
    title: 'Full-Stack Developer',
    startDate: 'May 2016',
    endDate: 'May 2017',
    location: 'Durham, NC',
    technologies: ['Golang', 'Microservices', 'Oracle', 'REST', 'React', 'Angular'],
    highlights: [
      'Developed Go microservices backed by Oracle databases for enterprise systems',
      'Built React and Angular UIs for complex enterprise workflows and data visualization',
      'Wrote optimized SQL queries and managed schema changes for Oracle databases',
      'Participated in code reviews and contributed to CI/CD pipeline improvements',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise (HPE)',
    title: 'Software Engineer Intern',
    startDate: 'May 2015',
    endDate: 'Aug 2015',
    location: 'Durham, NC',
    technologies: ['Java', 'Spring MVC', 'Spring Boot', 'MySQL', 'Angular'],
    highlights: [
      'Implemented Java backend features and REST endpoints using Spring MVC and Spring Boot',
      'Developed Angular components integrated with Java APIs for dynamic user interfaces',
      'Collaborated with senior engineers on performance optimization and error handling best practices',
    ],
  },
  {
    company: 'FlexGen',
    title: 'Software Engineer Intern',
    startDate: 'May 2014',
    endDate: 'Aug 2014',
    location: 'Raleigh–Durham–Chapel Hill Area',
    technologies: ['C', 'C++', 'WPF'],
    highlights: [
      'Developed C/C++ internal tools and utilities for system operations',
      'Improved WPF desktop interfaces with enhanced usability and performance',
      'Debugged complex issues, optimized performance, and wrote clean code following code review standards',
    ],
  },
];

