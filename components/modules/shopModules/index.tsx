"use client";

import { ContentProps } from "@/components/carousel";
import MallCard from "../shared/mallCard";
import { useQuery } from "@tanstack/react-query";
import { getAllShopData } from "../homePageModule/homepageContent";
import { ShopsTypes } from "@/app/api/category/[name]/route";
import MallShopLoader from "../shared/loadingSkeleton/mallShopLoader";

const ShopContent = () => {
  const { data: shopData, isLoading } = useQuery({
    queryFn: () => getAllShopData(),
    queryKey: ["mall"],
  });
  if (isLoading) {
    return <MallShopLoader />;
  }

  // console.log(shopData);

  const newShopData =
    Array.isArray(shopData) &&
    shopData.map((shop: ShopsTypes) => ({
      _id: shop._id,
      name: shop.name,
      openTime: shop.openTime,
      closeTime: shop.closeTime,
      address: shop.mallName,
      phone: shop.phone,
      imageUrl: shop.image ? shop.image[0] : undefined,
    }));

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-bold text-brand-text-secondary">Malls</p>

      <div className="grid grid-cols-3 gap-6">
        {Array.isArray(newShopData) &&
          newShopData.map((mall: ContentProps) => (
            <MallCard content={mall} key={mall.name} title="shop" />
          ))}
      </div>
    </div>
  );
};

export default ShopContent;
