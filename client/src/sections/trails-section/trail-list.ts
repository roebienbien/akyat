import mountUlap from '../../assets/mountains/mount-ulap.jpg';
import mountPulag from '../../assets/mountains/mount-pulag.jpg';
import spartanTrail from '../../assets/mountains/spartan-trail.jpg';
import mountBatulao from '../../assets/mountains/mount-batulao.jpg';
import mountPinatubo from '../../assets/mountains/mount-pinatubo.jpg';

export interface ITrails {
  name: string;
  route: string;
  price: number;
  previewSrc: string;
  location: string;
  elevation: string; //Elevation gain:
  duration: number;
  length: string;
  trailType: string;
  difficulty: string;
  rating: number;
  description: string;
  relevancy: string;
  // Other TRAILS think about it
}

// references: Traveloka 7 best mountains hiking trail
const Trails: ITrails[] = [
  {
    name: 'Spartan Trail',
    route: 'spartanTrail',
    price: 1999,
    previewSrc: spartanTrail,
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587', //km
    duration: 132, //m
    length: '5.5', //km
    trailType: 'Point to Point',
    difficulty: 'beginner',
    rating: 4,
    description: 'Loremloremloremlorem',
    relevancy: 'new',
  },
  {
    name: 'Mount Pulag',
    route: 'pulag',
    price: 1999,
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922',
    duration: 354,
    length: '14.5',
    trailType: 'Out & back',
    difficulty: 'beginner',
    rating: 3.9,
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Batulao',
    route: 'batulao',
    price: 1999,
    previewSrc: mountBatulao,
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: 354,
    length: '10.3km',
    trailType: 'Out & Back',
    difficulty: 'advanced',
    rating: 3.7,
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Ulap',
    route: 'ulap',
    price: 599,
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: 198,
    length: '7.9km',
    trailType: 'Point to Point',
    difficulty: 'advanced',
    rating: 4.2,
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Pinatubo',
    route: 'pinatubo',
    price: 499,
    previewSrc: mountPinatubo,
    location: 'Subic, Zambales',
    elevation: '1486',
    duration: 246,
    length: '11.1km',
    trailType: 'Out & Back',
    difficulty: 'intermediate',
    rating: 4.5,
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Spartan Trail',
    route: 'spartanTrail',
    price: 399,
    previewSrc: spartanTrail,
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587m',
    duration: 198,
    length: '5.5km',
    trailType: 'Point to Point',
    difficulty: 'intermediate',
    rating: 4.2,
    description: 'Loremloremloremlorem',
    relevancy: 'trending',
  },
  {
    name: 'Mount Pulag',
    route: 'pulag',
    price: 499,
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: 198,
    length: '14.5km',
    trailType: 'Out & back',
    difficulty: 'advanced',
    rating: 3.9,
    description: '',
    relevancy: 'new',
  },
  {
    name: 'Mount Batulao',
    route: 'batulao',
    price: 699,
    previewSrc: mountBatulao,
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: 198,
    length: '10.3km',
    trailType: 'Out & Back',
    difficulty: 'beginner',
    rating: 3.7,
    description: '',
    relevancy: 'trending',
  },
  {
    name: 'Mount Ulap',
    route: 'ulap',
    price: 799,
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488',
    duration: 354,
    length: '7.9',
    trailType: 'Point to Point',
    difficulty: 'beginner',
    rating: 4.2,
    description: '',
    relevancy: 'popular',
  },
  // {
  //   name: '',
  //   previewSrc: '',
  //   location: '',
  //   elevation: '',
  //   duration: '',
  //   length: '',
  //  trailType: '',
  //   difficulty: '',
  //   rating: '',
  //   description: '',
  // },
];

export default Trails;
