import baseUrl from "../../utils/config/baseUrl";

// get all  Sliders
export const getAllTeamOwnersRequest = async () => {
  let url = `${baseUrl}/list-team-owners/1/100/0`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error team owners");
  }
  const data = await res.json();
  if (data?.data?.[0].total?.[0]?.count > 0) {
    return data?.data?.[0].rows;
  } else {
    return [];
  }
};
