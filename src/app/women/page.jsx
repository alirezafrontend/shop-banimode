import dynamic from "next/dynamic";
import { bannerWomen } from "@/component/constants/womenConstant";
import Loading from "@/component/core/loading/Loading";
import Container from "@/component/shared/container/Container";
import ItemProduct from "@/component/shared/itemProduct/ItemProduct";
import BannerProduct from "@/component/shared/products/BannerProduct";
import { getProductWomen } from "@/services/productBase";
import React, { Suspense } from "react";
import TitlePage from "@/component/shared/products/TitlePage";

export async function generateMetadata() {
  return {
    title: "جدیدترین محصولات زنانه - بانی مد",
    description: "جدیدترین محصولات زنانه با تخفیف ویژه",
  };
}

const titlePage = [
  "انواع لباس‌های زنانه شیک و باکیفیت",
  "جدیدترین مدل‌های لباس زنانه با تنوع بالا و قیمت مناسب در بانی مد! برای هر سلیقه‌ای انتخابی شیک داریم. وقتشه استایلتو به‌روز کنی!",
];

const fetchProductWomen = async () => {
  const productWomen = await getProductWomen();
  return productWomen;
};

const Women = async () => {
  const productWomen = await fetchProductWomen();

  return (
    <div className="min-h-screen">
      <Container>
        <div className="border-t-[1px] border-t-[#00000012] border-b-[1px] border-b-[#00000012] py-[20px]">
          <BannerProduct bannerProducts={bannerWomen} />
        </div>
        <div className="my-[80px]">
          <TitlePage titlePage={titlePage} />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-12 gap-x-[20px] gap-y-[40px] my-[50px]">
            {productWomen &&
              productWomen.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 lg:col-span-3"
                  >
                    <ItemProduct
                      title={item.title}
                      brand={item.brand}
                      price={item.price}
                      href="women"
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

export default Women;
