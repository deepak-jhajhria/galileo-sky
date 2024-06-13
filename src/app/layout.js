import "./globals.css";

export const metadata = {
  metadataBase: "https://stratman-ai-sigma.vercel.app/",
  title: "Galileo Sky",
  description: "BEYOND ENTERTAINMENT",
  openGraph: {
    title: "Galileo Sky",
    description: "BEYOND ENTERTAINMENT",
    images: ["/assets/images/meta.png"],

  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
