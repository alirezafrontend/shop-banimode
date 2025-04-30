import dynamic from "next/dynamic";
import { bannerDigital } from "@/component/constants/digitalConstant";
import Loading from "@/component/core/loading/Loading";
import Container from "@/component/shared/container/Container";
import ItemProduct from "@/component/shared/itemProduct/ItemProduct";
import BannerProduct from "@/component/shared/products/BannerProduct";
import { getProductDigital } from "@/services/productBase";
import React, { Suspense } from "react";
import TitlePage from "@/component/shared/products/TitlePage";

export async function generateMetadata() {
  return {
    title: "جدیدترین محصولات دیجیتال - بانی مد",
    description: "جدیدترین محصولات دیجیتال با تخفیف ویژه",
  };
}

const titlePage = [
  "انواع محصولات دیجیتال",
  "جدیدترین محصولات دیجیتال با تنوع بالا و قیمت مناسب در بانی مد! برای هر سلیقه‌ای انتخابی شیک داریم.!",
];

const fetchProductDigital = async () => {
  const productDigital = await getProductDigital();
  return productDigital;
};

const Digital = async () => {
  const productDigital = await fetchProductDigital();

  return (
    <div className="min-h-screen">
      <Container>
        <div className="border-t-[1px] border-t-[#00000012] border-b-[1px] border-b-[#00000012] py-[20px]">
          <BannerProduct bannerProducts={bannerDigital} />
        </div>
        <div className="my-[80px]">
          <TitlePage titlePage={titlePage} />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-12 gap-[20px] my-[50px]">
            {productDigital &&
              productDigital.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 lg:col-span-3"
                  >
                    <ItemProduct
                      title={item.title}
                      brand={item.brand}
                      price={item.price}
                      href="digital"
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

export default Digital;
