import baseUrl from "../../utils/config/baseUrl";

// get contact us paragraph
export const contactUsParagraphRequest = async () => {
  let url = `${baseUrl}/list-contact-us`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error(
      "There was an error fetching top, best, electronics products banners"
    );
  }
  const data = await res.json();
  return data?.data;
};
// get contact us form
export const contactUsFormRequest = async (formValue) => {
  let url = `${baseUrl}/contact-us-form`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formValue.name,
      email: formValue.email,
      phone: formValue.mobile,
      message: formValue.message,
    }),
  });
  if (!res.ok) {
    throw new Error("There was an error form submitting");
  }
  const data = await res.json();
  return data;
};
// get about us paragraph
export const aboutUsFooterParagraphRequest = async () => {
  let url = `${baseUrl}/list-about-us`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching about us data");
  }
  const data = await res.json();
  return data?.data;
};

// get faq
export const faqRequest = async () => {
  let url = `${baseUrl}/list-faq`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching faq data");
  }
  const data = await res.json();
  return data?.data;
};
// get Privacy Policy Paragraph
export const privacyPolicyParagraphRequest = async () => {
  let url = `${baseUrl}/list-privacy-policy`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching privacy policy   data");
  }
  const data = await res.json();
  return data?.data;
};

// get term of use Paragraph
export const termOfUseParagraphRequest = async () => {
  let url = `${baseUrl}/list-term-of-use`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching term of use   data");
  }
  const data = await res.json();
  return data?.data;
};
// get team
export const teamParagraphRequest = async () => {
  let url = `${baseUrl}/list-team`;

  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) {
    throw new Error("There was an error fetching term of use   data");
  }
  const data = await res.json();
  return data?.data;
};
