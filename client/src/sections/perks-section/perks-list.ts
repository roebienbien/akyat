import { IconType } from 'react-icons';
import { FaLeaf, FaBookOpen } from 'react-icons/fa6';
import { RiUserHeartLine } from 'react-icons/ri';

export type TPerks = {
  icon: IconType;
  perk: string;
  description: string;
};

export const PerksList: TPerks[] = [
  {
    icon: FaLeaf,
    perk: 'Environmental Stewardship',
    description: 'Explore Responsibly, Preserve Naturally – Your Adventure, Our Commitment to Conservation.',
    // description: `We prioritize eco-friendly practices to minimize our environmental impact. By booking with us, you contribute to responsible tourism and conservation efforts, making your adventure not only memorable but also meaningful for the preservation of these natural wonders.`,
  },
  {
    icon: RiUserHeartLine,
    perk: 'Guided Adventures',
    description: 'Guided by Locals, Inspired by Nature – Experience Safety, Stories, and Scenic Wonders.',
    // description:
    //   'Our team of local experts not only ensures your safety on trails but also shares stories about the flora, fauna, cultural significance of each location, making your hike a truly enriching experience.',
  },
  {
    icon: FaBookOpen,
    perk: 'Seamless Booking',
    description: 'Adventure Awaits – Book with Ease, Book with Akyat .',
    // description: `Enjoy a hassle-free booking experience with our user-friendly platform. Whether your'e a solo adventurer or planning a group expedition, our streamlined booking process ensures convenience.`,
  },
];
