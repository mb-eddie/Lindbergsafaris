import { Tour } from '../types';

export const tours: Tour[] = [
  {
    id: '1',
    name: 'Classic Kenya Safari',
    destination: 'Kenya',
    price: 2500,
    duration: '7 days',
    description: 'Experience the magic of Kenya\'s most iconic wildlife reserves, from the Maasai Mara to Amboseli with views of Mt. Kilimanjaro.',
    image: '/images/tours/kenya-safari.jpg',
    featured: true
  },
  {
    id: '2',
    name: 'Zanzibar Beach Getaway',
    destination: 'Tanzania',
    price: 1800,
    duration: '5 days',
    description: 'Relax on the pristine beaches of Zanzibar, swim in crystal-clear waters, and explore the historic Stone Town.',
    image: '/images/tours/zanzibar-beach.jpg',
    featured: true
  },
  {
    id: '3',
    name: 'Serengeti Migration Safari',
    destination: 'Tanzania',
    price: 3200,
    duration: '8 days',
    description: 'Witness the incredible Great Migration as millions of wildebeest and zebra traverse the Serengeti plains.',
    image: '/images/tours/serengeti-migration.jpg',
    featured: true
  }
];