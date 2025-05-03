export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  featured?: boolean;
}

export interface Tour {
  id: string;
  name: string;
  destination: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}