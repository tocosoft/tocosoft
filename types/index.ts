export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "web" | "mobile" | "design";
  thumbnail: string;
  excerpt: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: { metric: string; value: string }[];
  images: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedIn?: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface Technology {
  id: string;
  name: string;
  category: "frontend" | "backend" | "mobile" | "devops" | "cloud";
  logo: string;
}
