import { Metadata } from "next"
import "styles/globals.css"
import Image from "next/image"
import back1 from "../../public/back2.png"; // Ensure this path is correct


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
      <Image
        src={back1}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background image"
        className="z-0"
      />
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
