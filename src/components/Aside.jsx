"use client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", title: "Home" },
  { href: "/biodata", title: "Edit Biodata" },
  { href: "/next_of_kin", title: "Next of Kin Details" },
  { href: "/pay_slip", title: "Pay Tuition Fee" },
  { href: "/pay_acom", title: "Pay Accommmodation Fees (Optional)" },
  { href: "/cs_reg", title: "Course Registraion" },
  { href: "/cerf_form", title: "Clearance Form" },
  { href: "/check_res", title: "Check Result" },
  { href: "/login", title: "Sign out" },
];

// function NavItem({ title }) {
//   return (
//     <li>
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
          {links.map(({ href, title }) => (
            <li className={`py-2.5 px-3.75 ${pathname == href ? 'bg-royal-blue text-white' : '' }`} key={uuidv4()}>
              <Link href={`${href}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
