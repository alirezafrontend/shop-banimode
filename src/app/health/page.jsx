import dynamic from "next/dynamic";
import { bannerHealth } from "@/component/constants/healthConstant";
import Loading from "@/component/core/loading/Loading";
import Container from "@/component/shared/container/Container";
import ItemProduct from "@/component/shared/itemProduct/ItemProduct";
import BannerProduct from "@/component/shared/products/BannerProduct";
import { getProductHealth } from "@/services/productBase";
import React, { Suspense } from "react";
import TitlePage from "@/component/shared/products/TitlePage";

export async function generateMetadata() {
  return {
    title: "جدیدترین محصولات آرایشی و بهداشتی - بانی مد",
    description: "جدیدترین محصولات آرایشی و بهداشتی با تخفیف ویژه",
  };
}

const titlePage = [
  "انواع محصولات زیبایی و سلامت",
  "جدیدترین محصولات زیبایی و سلامت با تنوع بالا و قیمت مناسب در بانی مد! برای هر سلیقه‌ای انتخابی شیک داریم.!",
];

const fetchProductHealth = async () => {
  const productHealth = await getProductHealth();
  return productHealth;
};

const Health = async () => {
  const productHealth = await fetchProductHealth();

  return (
    <div className="min-h-screen">
      <Container>
        <div className="border-t-[1px] border-t-[#00000012] border-b-[1px] border-b-[#00000012] py-[20px]">
          <BannerProduct bannerProducts={bannerHealth} />
        </div>
        <div className="my-[80px]">
          <TitlePage titlePage={titlePage} />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-12 gap-[20px] my-[50px]">
            {productHealth &&
              productHealth.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 lg:col-span-3"
                  >
                    <ItemProduct
                      title={item.title}
                      brand={item.brand}
                      price={item.price}
                      href="health"
                      src1={item.images[0]}
                      src2={item.images[1]}
                      discount={item.discount}
                      id={item.id}
                    />
                  </div>
                );
              })}
          </div>
        </Suspense>
      </Container>
    </div>
  );
};

export default Health;
