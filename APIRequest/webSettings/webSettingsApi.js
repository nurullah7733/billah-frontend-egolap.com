import baseUrl from "../../utils/config/baseUrl";

export const getAllWebSettings = async () => {
  let url = `${baseUrl}/get-all-web-settings`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error(
      "There was an error fetching top, best, electronics products banners"
    );
  }
  const data = await res.json();
  return data?.data;
};
