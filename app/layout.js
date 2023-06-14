export const metadata = {
	title: "Crypto NextJS",
	description: "Crypto App NextJS by Alex K",
	icons: {
		shortcut: ["/favicon/favicon.ico"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
