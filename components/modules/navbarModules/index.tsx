// import ThemeSwitch from "@/components/themeprovider/themeSwitch";
import { navbarItemsListMap } from "@/components/utilityComponents/navbarTitles";
import Link from "next/link";
import UserActivityLog from "./userLog";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import ShopList from "@/components/navbar/shopList";

// when using useSession here u logout but signIn is only shown after refreshing when loginIn too only after refresh userActivity is shown

const NavbarLinkContent = async () => {
  const session = await auth();

  // console.log("From Navitaion:", session);

  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return (
  //     <div className="flex flex-col tablet-md:flex-row tablet-md:justify-between gap-6 tablet-md:items-center text-brand-text-primary">
  //       {/* Optionally, you can display a loading spinner or some placeholder UI */}
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col tablet-md:flex-row tablet-md:justify-between gap-6 tablet-md:items-center text-brand-text-primary">
      <Link
        className={`hover:text-brand-text-tertiary font-bold 
        }`}
        href={session?.user.role === "admin" ? "/admin/malls" : "/malls"}
      >
        Malls
      </Link>

      <ShopList />

      {navbarItemsListMap.map((navItem, index) => (
        <React.Fragment key={index}>
          {navItem.navItemName === "Shop Category" ? (
            <Link
              className={`hover:text-brand-text-tertiary font-bold ${
                session?.user.role === "admin" ? "visible" : "hidden"
              }`}
              href={
                session?.user.role === "admin"
                  ? navItem.adminLink
                  : navItem.link
              }
            >
              {navItem.navItemName}
            </Link>
          ) : (
            <Link
              className={`hover:text-brand-text-tertiary font-bold`}
              href={
                session?.user.role === "admin"
                  ? navItem.adminLink
                  : navItem.link
              }
            >
              {navItem.navItemName}
            </Link>
          )}
        </React.Fragment>
      ))}

      {/* <ThemeSwitch /> */}

      {session && session.user ? (
        <UserActivityLog
          isAdmin={session.user.isAdmin}
          role={session.user.role}
        />
      ) : (
        <Button
          variant="signin"
          className="border-blue-600 text-brand-text-footer hover:text-brand-text-customBlue hover:border-blue-400"
        >
          <Link href="/login"> Sign In </Link>
        </Button>
      )}
    </div>
  );
};

export default NavbarLinkContent;
