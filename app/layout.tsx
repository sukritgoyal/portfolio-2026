import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-gray-200 font-sans">
        {children}
      </body>
    </html>
  )
}
