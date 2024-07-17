import baseUrl from "../../utils/config/baseUrl";

// get all  Sliders
export const getBestSalesBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-best-sales/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching best sales banners");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};
export const getKachaBazarBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-kacha-bazar/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching kacha bazar banners");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getBestOfElectronicsBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-best-of-electronics/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching best of electronics banners");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getContactUsBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-contact-us/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching contact banners");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getFaqBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-faq/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error faq banner");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getTeamBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-team/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error faq banner");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getPrivacyPolicyBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-privacy-policy/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error  privacy policy banner");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};

export const getTermOfUseBannerRequest = async () => {
  let url = `${baseUrl}/get-all-banner-term-of-conditions/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error   term of use banner");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};
