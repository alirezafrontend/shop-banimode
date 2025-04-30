import dynamic from "next/dynamic";
import Banner from "@/component/home/Banner";
import Container from "@/component/shared/container/Container";
import {
  getProductDigital,
  getProductHealth,
  getProductSales,
} from "@/services/productBase";


const Newsletter = dynamic(() => import("@/component/home/Newsletter"));
const CatHome = dynamic(() => import("@/component/home/CatHome"));
const SalesProduct = dynamic(() => import("@/component/home/SalesProduct"));
const BrandHome = dynamic(() => import("@/component/home/BrandHome"));
const DigitalHome = dynamic(() => import("@/component/home/DigitalHome"));
const BannerCenter = dynamic(() => import("@/component/home/BannerCenter"));
const HealthHome = dynamic(() => import("@/component/home/HealthHome"));

async function fetchData() {
  try {
    const [productSales, productDigital, productHealth] = await Promise.all([
      getProductSales({ limit: 10 }),
      getProductDigital({ limit: 10 }),
      getProductHealth({ limit: 10 }),
    ]);
    return { productSales, productDigital, productHealth };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { productSales: [], productDigital: [], productHealth: [] };
  }
}

export default async function Home() {
  const { productSales, productDigital, productHealth } = await fetchData();

  return (
    <div className="min-h-screen py-[20px] lg:py-0">
      <Container>
        <Banner />
        <CatHome />
        <SalesProduct products={productSales} />
      </Container>
      <BrandHome />
      <Container>
        <DigitalHome products={productDigital} />
        <BannerCenter />
        <HealthHome products={productHealth} />
        <Newsletter />
      </Container>
    </div>
  );
}
