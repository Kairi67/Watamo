import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "渡辺モータース商会 | WATAMO",
    template: "%s | WATAMO",
  },
  description: "静岡市清水区の渡辺モータース商会。新車・中古車販売、車検・整備、自動車保険、24時間カーレスキューまでトータルサポート。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}