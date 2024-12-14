import "./globals.css";
import { Providers } from "./Providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
