import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";

const galanoRegular = localFont({
  src: "./fonts/galano.woff",
  variable: "--font-galano-regular",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://www.jlgdg.com/'),
  title: "John Lloyd De Guzman",
  description: "Website Portfolio",
  openGraph: {
    title: 'John Lloyd De Guzman',
    description: 'Portfolio',
    url: 'https://www.jlgdg.com/',
    images: 'public/icons/pageicon.svg',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-galano antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
