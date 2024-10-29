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
  duration: string;
  length: string;
  trailRoute: string;
  difficulty: string;
  rating: string;
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
    elevation: '587m',
    duration: '2h 2m',
    length: '5.5km',
    trailRoute: 'Point to Point',
    difficulty: 'easy',
    rating: '4',
    description: 'Loremloremloremlorem',
    relevancy: 'new',
  },
  {
    name: 'Mount Pulag',
    route: 'pulag',
    price: 1999,
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: '5h 9m',
    length: '14.5km',
    trailRoute: 'Out & back',
    difficulty: 'easy',
    rating: '3.9',
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
    duration: '5h 9m',
    length: '10.3km',
    trailRoute: 'Out & Back',
    difficulty: 'hard',
    rating: '3.7',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Ulap',
    route: 'ulap',
    price: 1999,
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: '3h 31m',
    length: '7.9km',
    trailRoute: 'Point to Point',
    difficulty: 'hard',
    rating: '4.2',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Pinatubo',
    route: 'pinatubo',
    price: 1999,
    previewSrc: mountPinatubo,
    location: 'Subic, Zambales',
    elevation: '1486',
    duration: '4h 1m',
    length: '11.1km',
    trailRoute: 'Out & Back',
    difficulty: 'easy',
    rating: '4.5',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Spartan Trail',
    route: 'spartanTrail',
    price: 1999,
    previewSrc: spartanTrail,
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587m',
    duration: '2h 2m',
    length: '5.5km',
    trailRoute: 'Point to Point',
    difficulty: 'easy',
    rating: '4',
    description: 'Loremloremloremlorem',
    relevancy: 'trending',
  },
  {
    name: 'Mount Pulag',
    route: 'pulag',
    price: 1999,
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: '5h 9m',
    length: '14.5km',
    trailRoute: 'Out & back',
    difficulty: 'hard',
    rating: '3.9',
    description: '',
    relevancy: 'new',
  },
  {
    name: 'Mount Batulao',
    route: 'batulao',
    price: 1999,
    previewSrc: mountBatulao,
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: '5h 9m',
    length: '10.3km',
    trailRoute: 'Out & Back',
    difficulty: 'easy',
    rating: '3.7',
    description: '',
    relevancy: 'trending',
  },
  {
    name: 'Mount Ulap',
    route: 'ulap',
    price: 1999,
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: '3h 31m',
    length: '7.9km',
    trailRoute: 'Point to Point',
    difficulty: 'easy',
    rating: '4.2',
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
  //  trailRoute: '',
  //   difficulty: '',
  //   rating: '',
  //   description: '',
  // },
];

export default Trails;
