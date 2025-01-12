"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { shops_categories as shopCategories } from "@/json_data/shops_category.json";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ShopList = () => {
  const { data: session } = useSession();

  return (
    <NavigationMenu viewportClassName="-left-36">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-bold">
            <Link
              href={session?.user.role === "admin" ? "/admin/shops" : "/shops"}
            >
              Shops
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-5 gap-4 min-w-52 font-normal">
            {shopCategories.map((category) => (
              <React.Fragment key={category.text}>
                {category.isNavContent === "false" ? (
                  <NavigationMenuLink
                    href={category.link}
                    className=" text-brand-text-primary min-w-[250px] hover:text-[#426CC0]"
                    key={category.text}
                  >
                    {category.text}
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    key={category.text}
                    className="text-brand-text-primary min-w-[250px] hover:text-[#426CC0]"
                  >
                    {category.text}
                  </NavigationMenuLink>
                )}
              </React.Fragment>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ShopList;
