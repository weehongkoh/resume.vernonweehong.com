import { Metadata } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Vernon Wee Hong KOH - Resume",
  description:
    "Lifelong learner with expertise in crafting engaging user interfaces (UIs) and robust application programming interfaces (APIs). Share knowledge and contribute to the growth of the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
      </body>
    </html>
  );
}
