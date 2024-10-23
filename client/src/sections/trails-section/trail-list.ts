import mountUlap from '../../assets/mountains/mount-ulap.jpg';
import mountPulag from '../../assets/mountains/mount-pulag.jpg';
import spartanTrail from '../../assets/mountains/spartan-trail.jpg';
import mountBatulao from '../../assets/mountains/mount-batulao.jpg';
import mountPinatubo from '../../assets/mountains/mount-pinatubo.jpg';

export interface ITrailList {
  name: string;
  previewSrc: string;
  location: string;
  elevation: string; //Elevation gain:
  duration: string;
  length: string;
  route: string;
  difficulty: string;
  rating: string;
  description: string;
  relevancy: string;
  // Other TRAILS think about it
}

// references: Traveloka 7 best mountains hiking trail
const TrailList: ITrailList[] = [
  {
    name: 'Spartan Trail',
    previewSrc: spartanTrail,
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587m',
    duration: '2h 2m',
    length: '5.5km',
    route: 'Point to Point',
    difficulty: 'easy',
    rating: '4',
    description: 'Loremloremloremlorem',
    relevancy: 'new',
  },
  {
    name: 'Mount Pulag',
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: '5h 9m',
    length: '14.5km',
    route: 'Out & back',
    difficulty: 'easy',
    rating: '3.9',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Batulao',
    previewSrc: mountBatulao,
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: '5h 9m',
    length: '10.3km',
    route: 'Out & Back',
    difficulty: 'hard',
    rating: '3.7',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Ulap',
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: '3h 31m',
    length: '7.9km',
    route: 'Point to Point',
    difficulty: 'hard',
    rating: '4.2',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Mount Pinatubo',
    previewSrc: mountPinatubo,
    location: 'Subic, Zambales',
    elevation: '1486',
    duration: '4h 1m',
    length: '11.1km',
    route: 'Out & Back',
    difficulty: 'easy',
    rating: '4.5',
    description: '',
    relevancy: 'popular',
  },
  {
    name: 'Spartan Trail',
    previewSrc: spartanTrail,
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587m',
    duration: '2h 2m',
    length: '5.5km',
    route: 'Point to Point',
    difficulty: 'easy',
    rating: '4',
    description: 'Loremloremloremlorem',
    relevancy: 'trending',
  },
  {
    name: 'Mount Pulag',
    previewSrc: mountPulag,
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: '5h 9m',
    length: '14.5km',
    route: 'Out & back',
    difficulty: 'hard',
    rating: '3.9',
    description: '',
    relevancy: 'new',
  },
  {
    name: 'Mount Batulao',
    previewSrc: mountBatulao,
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: '5h 9m',
    length: '10.3km',
    route: 'Out & Back',
    difficulty: 'easy',
    rating: '3.7',
    description: '',
    relevancy: 'trending',
  },
  {
    name: 'Mount Ulap',
    previewSrc: mountUlap,
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: '3h 31m',
    length: '7.9km',
    route: 'Point to Point',
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
  //   route: '',
  //   difficulty: '',
  //   rating: '',
  //   description: '',
  // },
];

export default TrailList;
