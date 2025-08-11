import "./globals.css";
export const metadata = {
  title: "Portfolio Tamlyn Springer",
  description: "Portfolio Tamlyn Springer - Product Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
