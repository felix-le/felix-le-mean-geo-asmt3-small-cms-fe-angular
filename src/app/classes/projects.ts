export class ProjectsApiService {
  constructor() {
    this.name = '';
    this.description = '';
    this.date = '';
    this.client = '';
    this.status = '';
    this.technologies = {};
    this.link = '';
  }
  name: string;
  description: string;
  date: string;
  client: string;
  status: string;
  technologies: object;
  link: string;
}
