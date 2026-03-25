import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakan Demirci',
  description: 'Bilinç, teknoloji ve gelecek arasında kendi mimarisini kuran kişisel vizyon yüzeyi.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
