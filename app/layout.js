export const metadata = {
  title: "NewsPlus",
  description: "Reliable global news updated in real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
