import Image from "next/image";
import Link from "next/link";
import payOnline from "@/assets/payonline.png";
import profileImage from "@/assets/test-image.jpg";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className={`${inter.className} row-span-7 col-span-3`}>
      <h1 className="text-[21px] mb-5 text-[#333] border-b border-[#e5e5e5]">
        Welcome <strong>Effiong</strong>, Odohofre Bright
      </h1>
      <div className="flex w-full">
        <div className="w-1/6">
          <Image
            src={profileImage}
            className="p-1 border border-[#ddd] rounded"
            width={130}
          />
        </div>
        <div className="w-5/6">
          <table className="ml-2.5 w-full">
            <tbody>
              <tr className="bg-[#f9f9f9]">
                <td className="p-2 border-t border-[#ddd]">
                  <strong>Matric/Jamb No.</strong>
                </td>
                <td className="p-2 border-t border-[#ddd]">
                  96658801FD - U19AE1234
                </td>
              </tr>
              <tr>
                <td className="p-2 border-t border-[#ddd]">
                  <strong>Program in view</strong>
                </td>
                <td className="p-2 border-t border-[#ddd]">
                  B.Eng Aerospace Engineering
                </td>
              </tr>
              <tr className="bg-[#f9f9f9]">
                <td className="p-2 border-t border-[#ddd]">
                  <strong>Level</strong>
                </td>
                <td className="p-2 border-t border-[#ddd]">400</td>
              </tr>
              <tr>
                <td
                  className="p-2 border-t border-[#ddd] flex justify-center items-center"
                  colSpan={2}
                >
                  <strong>
                    <Link href="pay_slip" className="text-[#428bca]">
                      Proceed to Pay 2022/2023 Tuition Fee{">>>"}
                      <Image src={payOnline} width={260} className="w-1/5" alt="payment card" />
                    </Link>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
