import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Maasai Mara',
    country: 'Kenya',
    continent: 'Africa',
    description: 'Experience the world-famous wildebeest migration and witness the Big Five in their natural habitat.',
    price: 1800,
    duration: '5 days',
    image: '/images/destinations/maasai-mara.jpg',
    featured: true
  },
  {
    id: '2',
    name: 'Serengeti',
    country: 'Tanzania',
    continent: 'Africa',
    description: 'Explore the endless plains where lions roam freely and witness the greatest wildlife spectacle on Earth.',
    price: 2200,
    duration: '7 days',
    image: '/images/destinations/serengeti.jpg',
    featured: true
  },
  {
    id: '3',
    name: 'Zanzibar',
    country: 'Tanzania',
    continent: 'Africa',
    description: 'Relax on pristine white beaches and explore the historic Stone Town with its rich cultural heritage.',
    price: 1600,
    duration: '6 days',
    image: '/images/destinations/zanzibar.jpg',
    featured: true
  },
  {
    id: '4',
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    description: 'Discover the breathtaking landscapes, vibrant culture, and rich history of this coastal gem.',
    price: 1900,
    duration: '8 days',
    image: '/images/destinations/cape-town.jpg'
  },
  {
    id: '5',
    name: 'Seychelles',
    country: 'Seychelles',
    continent: 'Africa',
    description: 'Indulge in luxury on these pristine islands with crystal-clear waters and unique wildlife.',
    price: 2800,
    duration: '7 days',
    image: '/images/destinations/seychelles.jpg'
  },
  {
    id: '6',
    name: 'Mount Kilimanjaro',
    country: 'Tanzania',
    continent: 'Africa',
    description: 'Challenge yourself with a trek to the roof of Africa, experiencing diverse ecosystems along the way.',
    price: 2400,
    duration: '8 days',
    image: '/images/destinations/kilimanjaro.jpg'
  }
];