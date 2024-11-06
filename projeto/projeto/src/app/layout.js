import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Minha Primeira aplicação",
  description: "Aplicação de Front-End II",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    </html>
  );
}
