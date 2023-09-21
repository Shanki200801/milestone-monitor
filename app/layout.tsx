import './globals.css'

export const metadata = {
  title: 'Milestone Monitor',
  description: 'A cataloguing app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
