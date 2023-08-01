'use client';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { usePathname } from 'next/navigation';
import { home, user, card, write } from '@/imageList';

const links = [
  { href: '/', title: 'Home', icon: home },
  { href: '/biodata', title: 'Edit Biodata', icon: write },
  { href: '/next_of_kin', title: 'Next of Kin Details', icon: write },
  { href: '/pay_slip', title: 'Pay Tuition Fee', icon: card },
  {
    href: '/pay_acom',
    title: 'Pay Accommmodation Fees (Optional)',
    icon: card,
  },
  { href: '/cs_reg', title: 'Course Registraion', icon: write },
  { href: '/cerf_form', title: 'Clearance Form', icon: write },
  { href: '/check_res', title: 'Check Result', icon: write },
  { href: '/login', title: 'Sign out', icon: write },
];

// function NavItem({ title, href, icon }) {
//   return (
//     <li>
//      <span></span>
//       <Link href={`/title`}>{title}</Link>{" "}
//     </li>
//   );
// }

export default function Aside() {
  const pathname = usePathname();
  return (
    <aside className="row-span-7 col-span-1 mr-3.75">
      <nav>
        <ul className="mb-5 border border-[#ddd] rounded divide-y divide-[#ddd]">
          {links.map(({ href, title, icon }) => (
            <li
              className={`space-x-1 py-2.5 px-3.75 text-[#333] font-normal hover:bg-royal-blue  hover:text-white ${
                pathname == href ? 'bg-royal-blue text-white' : ''
              }`}
              key={uuidv4()}
            >
              <span className={`inline-block  `}>
                <Image
                  width={14}
                  height={14}
                  src={icon}
                  alt={`${title} icon`}
                />
              </span>
              <Link className="inline" href={`${href}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
