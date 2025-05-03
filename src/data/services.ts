import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Safari Tours',
    description: 'Expertly guided wildlife safaris throughout Eastern and Southern Africa, tailored to your preferences.',
    icon: 'compass',
    link: '/services#tours'
  },
  {
    id: '2',
    title: 'Hotel Booking',
    description: 'Secure the best accommodations from luxury lodges to boutique hotels across our destination network.',
    icon: 'hotel',
    link: '/services#booking'
  },
  {
    id: '3',
    title: 'Transport Services',
    description: 'Reliable and comfortable transportation for all your travel needs, including airport transfers.',
    icon: 'car',
    link: '/services#transport'
  },
  {
    id: '4',
    title: 'Air Travel Ticketing',
    description: 'Competitive rates on international and domestic flights with personalized itinerary planning.',
    icon: 'plane',
    link: '/services#ticketing'
  },
  {
    id: '5',
    title: 'Agri-Tourism',
    description: 'Unique agricultural experiences connecting travelers with local farming practices and food traditions.',
    icon: 'sprout',
    link: '/services#agri-tourism'
  }
];