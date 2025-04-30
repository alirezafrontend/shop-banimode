import dynamic from "next/dynamic";
import { bannerMen } from "@/component/constants/menConstant";
import Loading from "@/component/core/loading/Loading";
import Container from "@/component/shared/container/Container";
import ItemProduct from "@/component/shared/itemProduct/ItemProduct";
import BannerProduct from "@/component/shared/products/BannerProduct";
import { getProductMen } from "@/services/productBase";
import React, { Suspense } from "react";
import TitlePage from "@/component/shared/products/TitlePage";

export async function generateMetadata() {
  return {
    title: "جدیدترین محصولات مردانه - بانی مد",
    description: "جدیدترین محصولات مردانه با تخفیف ویژه",
  };
}

const titlePage = [
  "انواع لباس‌های مردانه شیک و باکیفیت",
  "جدیدترین مدل‌های لباس مردانه با تنوع بالا و قیمت مناسب در بانی مد! برای هر سلیقه‌ای انتخابی شیک داریم. وقتشه استایلتو به‌روز کنی!",
];

const fetchProductMen = async () => {
  const productMen = await getProductMen();
  return productMen;
};

const Men = async () => {
  const productMen = await fetchProductMen();

  return (
    <div className="min-h-screen">
      <Container>
        <div className="border-t-[1px] border-t-[#00000012] border-b-[1px] border-b-[#00000012] py-[20px]">
          <BannerProduct bannerProducts={bannerMen} />
        </div>
        <div className="my-[80px]">
          <TitlePage titlePage={titlePage} />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-12 gap-[20px] my-[50px]">
            {productMen &&
              productMen.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 lg:col-span-3"
                  >
                    <ItemProduct
                      title={item.title}
                      brand={item.brand}
                      price={item.price}
                      href="men"
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

export default Men;
