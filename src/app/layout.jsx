import './globals.css';
import { outift } from './ui/fonts';

export const metadata = {
	title: "Yash's Portfolio",
	description: 'Personal website - built and designed by Yash Ghelani',
	icons: {
		icon: '/favicons/favicon.ico', // Path to favicon
		apple: '/favicons/apple-touch-icon.png', // Apple touch icon
		shortcut: '/favicons/favicon-32x32.png', // Shortcut icon
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={outift.className}>{children}</body>
		</html>
	);
}
