import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      ><Suspense fallback={<p>Loading.....</p>}>
          {children}
      </Suspense>
      </body>
    </html>
  );
}
