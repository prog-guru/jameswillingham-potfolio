export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['JavaScript/TypeScript', 'Java', 'C#', 'Go', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Redux/Redux Toolkit',
      'Angular',
      'Vue.js',
      'React Query',
      'TailwindCSS',
      'Material UI',
      'HTML5',
      'CSS3/SCSS',
      'Webpack/Vite',
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Java Spring Boot/MVC',
      '.NET Core/ASP.NET',
      'Go microservices',
      'REST',
      'GraphQL',
      'gRPC',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, API Gateway, ECS, S3, DynamoDB, RDS)',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD (GitHub Actions, Jenkins, CircleCI)',
    ],
  },
  {
    category: 'Data & Messaging',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Kafka',
      'RabbitMQ',
      'Event-driven architectures',
      'Microservices',
    ],
  },
  {
    category: 'LLM & AI',
    skills: [
      'OpenAI API',
      'Azure OpenAI',
      'LangChain',
      'Vector databases',
      'RAG pipelines',
      'Prompt engineering',
      'LLM-based automation',
    ],
  },
  {
    category: 'Quality & Practices',
    skills: [
      'Unit/integration testing',
      'Code reviews',
      'Performance tuning',
      'Secure coding',
      'Agile/Scrum',
      'Technical leadership',
    ],
  },
];

