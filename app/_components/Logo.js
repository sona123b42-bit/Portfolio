import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="120"
        width="120"
        alt="The Wild Oasis logo"
        className="left-20"
        quality={100}
      />
    </Link>
  );
}
