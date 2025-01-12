import CategoryContent from "@/components/modules/mallCategoryModules/categoryContent";
import MallSearch from "@/components/modules/userMallModules/mallSearch";

type PropsType = {
  params: Promise<{ name: string }>;
};

const ShopCategoryPage = async ({ params }: PropsType) => {
  const decodedParams = decodeURIComponent((await params).name);
  return (
    <div className="w-full flex flex-col items-center gap-14 mb-8 mt-4">
      <MallSearch />

      <CategoryContent initialCategory={decodedParams} />
    </div>
  );
};

export default ShopCategoryPage;
