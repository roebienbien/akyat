type TReviews = {
  userName: string;
  img: string;
  comment: string;
  rate: number;
  ratedDate: string;
  registeredAt: number;
};
export interface ITrails {
  name: string;
  route: string;
  price: number;
  hostImage: string;
  photoId: string;
  photos: { photoId: string; imgAlt: string }[];
  imgAlt: string;
  location: string;
  elevation: string; //Elevation gain:
  duration: number;
  length: string;
  trailType: string;
  difficulty: string;
  rating: number;
  description: string;
  relevancy: string;
  reviews: TReviews[];
}

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const Trails: ITrails[] = [
  {
    name: 'Spartan Trail',
    route: 'spartanTrail',
    price: 1999,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1665393717307-e3381c7eba02',
    photos: [
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587', //km
    duration: 132, //m
    length: '5.5', //km
    trailType: 'Point to Point',
    difficulty: 'beginner',
    rating: 0,
    description: 'Loremloremloremlorem',
    relevancy: 'new',
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis ex quisquam vel eius maxime error neque excepturi atque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est debitis labore deleniti unde voluptatibus aliquid iste illum nemo praesentium?',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Pulag',
    route: 'pulag',
    price: 1999,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1595248588362-18a894e156d1',
    photos: [
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Grand Cordillera Central',
    elevation: '2922',
    duration: 354,
    length: '14.5',
    trailType: 'Out & back',
    difficulty: 'beginner',
    description: '',
    relevancy: 'popular',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Batulao',
    route: 'batulao',
    price: 1999,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1560200772-52bc93e342cb',
    photos: [
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: 354,
    length: '10.3km',
    trailType: 'Out & Back',
    difficulty: 'advanced',
    description: '',
    relevancy: 'new',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Ulap',
    route: 'ulap',
    price: 599,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1629401681628-a37c83eb57d9',
    photos: [
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Itogon, Benguet',
    elevation: '488m',
    duration: 198,
    length: '7.9km',
    trailType: 'Point to Point',
    difficulty: 'advanced',
    description: '',
    relevancy: 'popular',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Pinatubo',
    route: 'pinatubo',
    price: 599,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1663524962794-545535854ff7',
    photos: [
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Subic, Zambales',
    elevation: '1486',
    duration: 246,
    length: '11.1km',
    trailType: 'Out & Back',
    difficulty: 'intermediate',
    description: '',
    relevancy: 'new',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Tapyas',
    route: 'tapya',
    price: 399,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1663524963912-2d360265e5f8',
    photos: [
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1697536440277-66c6a9ab45aa', imgAlt: '' },
      { photoId: '1595248612282-d52828c11810', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Buhisan Watershed Forest Reserved',
    elevation: '587m',
    duration: 198,
    length: '5.5km',
    trailType: 'Point to Point',
    difficulty: 'intermediate',
    description: 'Loremloremloremlorem',
    relevancy: 'popular',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Guiting-Guiting',
    route: 'guiting-guiting',
    price: 499,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1663524962567-a584dd70450c',
    photos: [
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Grand Cordillera Central',
    elevation: '2922m',
    duration: 198,
    length: '14.5km',
    trailType: 'Out & back',
    difficulty: 'advanced',
    description: '',
    relevancy: 'new',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Apo',
    route: 'apo',
    price: 699,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1698862338833-8a70583d1f79',
    photos: [
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Nasugbo, Batangas',
    elevation: '811',
    duration: 198,
    length: '10.3km',
    trailType: 'Out & Back',
    difficulty: 'beginner',
    description: '',
    relevancy: 'trending',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Makiling',
    route: 'makiling',
    price: 799,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1663524963903-b237eee642cf',
    photos: [
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Itogon, Benguet',
    elevation: '488',
    duration: 354,
    length: '7.9',
    trailType: 'Point to Point',
    difficulty: 'beginner',
    description: '',
    relevancy: 'popular',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment: 'good',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  {
    name: 'Mount Daraitan',
    route: 'daraitan',
    price: 799,
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1598608718918-b44f0d66e325',
    photos: [
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
      { photoId: '1665393717359-2aa387fcb4a2', imgAlt: '' },
      { photoId: '1665393717338-dd07628bf667', imgAlt: '' },
    ],
    imgAlt: 'spartan-trail',
    location: 'Itogon, Benguet',
    elevation: '488',
    duration: 354,
    length: '7.9',
    trailType: 'Point to Point',
    difficulty: 'beginner',
    description: '',
    relevancy: 'popular',
    rating: 0,
    reviews: [
      {
        userName: 'Magnus',
        img: '1579038773867-044c48829161',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis ex quisquam vel eius maxime error neque excepturi atque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est debitis labore deleniti unde voluptatibus aliquid iste illum nemo praesentium?',
        rate: 4,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 3,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
      {
        userName: 'Carlsen',
        img: '1579038773867-044c48829161',
        comment: 'bad',
        rate: 2,
        ratedDate: formattedDate,
        registeredAt: 9,
      },
    ],
  },
  // {
  //   name: '',
  //   photoId: '',
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

const averageRating = (reviews: TReviews[]) => {
  if (!reviews.length) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
  return parseFloat((totalRating / reviews.length).toFixed(1));
};

Trails.forEach((trail) => {
  trail.rating = averageRating(trail.reviews);
});

export default Trails;
