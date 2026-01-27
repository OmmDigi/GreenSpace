import Image from "next/image";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] max-sm:right-2 max-sm:bottom-2 max-sm:hidden">
      <Link href="https://api.whatsapp.com/send?phone=916289532707">
        <Image
          className="w-[4.2rem] animation-up-down max-sm:w-[3.2rem]"
          src={"/whatsappIcon.svg"}
          alt="Whatsapp Icon"
          height={1280}
          width={1280}
        />
      </Link>
    </div>
  );
}
