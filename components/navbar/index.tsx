import { Menu } from "lucide-react";
import NavbarLinkContent from "../modules/navbarModules";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#F9F9F9] fixed w-full z-50 top-0">
      <div className="container flex justify-between px-6 py-4 ">
        <Link href="/" className="flex gap-3 items-center justify-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 316.000000 310.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
            </metadata>
            <g
              transform="translate(0.000000,310.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1015 2936 c-70 -17 -130 -50 -184 -101 -91 -85 -111 -159 -111 -412
                l0 -163 -215 0 -215 0 0 -615 c0 -680 1 -687 64 -857 37 -98 77 -168 154 -270
                44 -58 53 -74 47 -96 -11 -46 -67 -135 -120 -191 l-50 -55 75 41 c177 94 315
                199 450 339 105 109 253 306 239 318 -2 2 -31 0 -64 -5 -79 -10 -295 -11 -295
                -1 0 4 29 26 64 50 149 101 333 285 425 423 23 34 41 64 41 68 0 4 -33 4 -72
                0 -132 -14 -309 -8 -308 10 1 3 42 34 93 68 175 118 353 297 462 466 28 42 52
                77 55 77 3 0 23 -28 45 -62 115 -179 306 -374 477 -486 48 -31 88 -60 88 -63
                0 -18 -176 -24 -307 -10 -41 4 -73 3 -73 -2 0 -5 28 -48 62 -95 83 -115 249
                -281 373 -373 l100 -74 -106 -3 c-59 -1 -140 1 -180 6 -41 5 -76 8 -78 6 -16
                -14 164 -247 275 -354 143 -138 278 -236 434 -315 l55 -28 -47 51 c-57 61
                -105 134 -119 183 -11 35 -9 38 46 110 100 129 181 313 205 465 8 51 14 716
                10 1222 l0 52 -215 0 -215 0 0 163 c0 247 -14 305 -96 396 -49 55 -136 104
                -212 120 -77 16 -990 13 -1057 -3z m1072 -176 c77 -35 83 -54 83 -292 l0 -208
                -621 0 -620 0 3 219 c3 218 3 220 28 246 50 55 46 54 585 54 472 1 502 -1 542
                -19z"
              />
            </g>
          </svg>
          <p className="text-2xl font-semibold">Shops and Malls</p>
        </Link>

        <div className="hidden tablet-md:flex">
          <NavbarLinkContent />
        </div>

        <Sheet>
          <SheetTrigger className="tablet-md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>Empty</SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
