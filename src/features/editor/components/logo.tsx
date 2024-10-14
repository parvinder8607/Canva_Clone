import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={50}
    
        className=" relative shrink-0 rounded-sm"
      />
    </Link>
  );
};