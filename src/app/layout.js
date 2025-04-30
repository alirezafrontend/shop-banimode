import "./globals.css";
import Header from "@/component/shared/header/Header";
import Container from "@/component/shared/container/Container";
import Footer from "@/component/shared/footer/Footer";

export const metadata = {
  title: "مرکز خرید آنلاین بانی مد",
  description: "",
  icons: {
    icon: "/icons/logo-s.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Container>
          <Header />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
