import baseUrl from "../../utils/config/baseUrl";

export const getSocialLinksRequest = async () => {
  let url = `${baseUrl}/get-social-link`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching Social Links");
  }
  const data = await res.json();

  return data?.data;
};
