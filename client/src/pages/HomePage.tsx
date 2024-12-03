import ScrollToTop from '../components/ScrollToTop';
import AkyatStatistics from '../sections/AkyatStatistics';
import AppPromotion from '../sections/app-promotion/AppPromotion';
import FAQSection from '../sections/FAQ';
import Hero from '../sections/Hero';
import Perks from '../sections/perks-section/Perks';
import Testimonials from '../sections/testimonials/Testimonials';
import Trails from '../sections/trails-section/Trails';

const HomePageSections = [
  // ScrollToTop, //scroll to top of page on page change
  Hero,
  Trails,
  Perks,
  AppPromotion,
  Testimonials,
  AkyatStatistics,
  FAQSection,
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {HomePageSections.map((Section, index) => (
        <div key={index} className="odd:bg-gray-50 even:bg-gray-100">
          <Section />
        </div>
      ))}
    </div>
  );
}
