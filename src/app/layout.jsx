import "./globals.css";
import { outift } from "./ui/fonts";


export const metadata = {
  title: "Yash's Portfolio",
  description: "Personal website - built and designed by Yash Ghelani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outift.className}>{children}</body>
    </html>
  );
}
