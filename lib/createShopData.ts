
export type ShopDataType = {
    shopName: string;
    level: string;
    phoneNumber: string;
    description: string;
    category: string;
    subCategory: string;
    image?: (File | string)[];
    openTime?: string | null;
    closeTime?: string | null;
    id?: string | null;
    nameOfMall?: string
    video?: string | File;
};


export const createShopFormData = (shopData: ShopDataType) => {
    const formData = new FormData();
    formData.append("name", shopData.shopName as string);
    formData.append("level", shopData.level);
    formData.append("phone", shopData.phoneNumber);
    formData.append("openTime", shopData.openTime as string | Blob);
    formData.append("closeTime", shopData.closeTime as string | Blob);
    formData.append("description", shopData.description)
    formData.append("category", shopData.category)
    formData.append("subCategory", shopData.subCategory);
    formData.append("mallId", shopData.id as string)
    formData.append("mallName", shopData.nameOfMall as string)

    if (shopData.image && shopData.image.length > 0) {
        shopData.image.forEach((file) => {
            formData.append("image", file); // Append each image as a separate entry
        });
    }

    if (shopData.video) {
        formData.append("video", shopData.video);
    }

    return formData;
}