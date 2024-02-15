import { CustomerReviews, PopularProducts, Footer, Hero, Services, SpecialOffer, Subscribe, SuperQuality, Nav } from "@/components";
export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding"><PopularProducts /></section>
      <section className="padding"><SuperQuality /></section>
      <section className="padding-x py-10"><Services /></section>
      <section className="padding"><SpecialOffer /></section>
      <section className="bg-pale-blue padding"><CustomerReviews /></section>
      <section className="padding-x sm:py-322 py-16 w-full"><Subscribe /></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
    </main>
  );
}
