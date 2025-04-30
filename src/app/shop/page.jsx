import Loading from "@/component/core/loading/Loading";
import Container from "@/component/shared/container/Container";
import ItemProduct from "@/component/shared/itemProduct/ItemProduct";
import BannerShop from "@/component/shop/BannerShop";
import { getProductSales } from "@/services/productBase";
import React, { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: "جدیدترین محصولات - بانی مد",
    description: "جدیدترین محصولات با تخفیف ویژه",
  };
}

const fetchProductSales = async () => {
  const productSales = await getProductSales();
  return productSales;
};

const Shop = async () => {
  const productSales = await fetchProductSales();

  return (
    <div className="min-h-screen">
      <Container>
        <BannerShop />
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-12 gap-[20px] my-[50px]">
            {productSales &&
              productSales.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-6 md:col-span-4 lg:col-span-3"
                  >
                    <ItemProduct
                      title={item.title}
                      brand={item.brand}
                      price={item.price}
                      href="shop"
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

export default Shop;
