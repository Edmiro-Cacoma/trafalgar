import { Header, Services, Healthcare, Download, Testmonials, Article, Footer } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Healthcare />
        <Download />
        <Testmonials />
        <Article />
      </main>
      <Footer />
    </div>
  );
}
