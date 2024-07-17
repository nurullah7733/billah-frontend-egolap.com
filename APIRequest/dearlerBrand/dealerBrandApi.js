import baseUrl from "../../utils/config/baseUrl";

// get all  Sliders
export const getAllDealerBrandLogoRequest = async () => {
  let url = `${baseUrl}/get-all-dealer-brand-logo/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching Dealer Brand Logo");
  }
  const data = await res.json();
  if (data?.data[0]?.total?.[0]?.count > 0) {
    return data?.data[0]?.rows;
  } else {
    return [];
  }
};
