import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-80"
    >
      <Image
        src={siteConfig.icons.icon}
        alt={siteConfig.name}
        width={32}
        height={32}
        className="h-auto rounded-md"
        priority
      />
      <span className="font-heading text-lg font-semibold tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  )
}
