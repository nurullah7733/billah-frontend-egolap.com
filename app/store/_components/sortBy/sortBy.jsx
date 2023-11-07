"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SortByPrice = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (e.target.value == "default") {
      current.delete("sortby");
    } else {
      current.set("sortby", e.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <>
      <select
        onChange={handleChange}
        id="countries"
        defaultValue={"default"}
        className="outline-none  flex justify-center items-center gap-x-1 w-[120px] text-[16px] rounded-lg text-black bg-[#f1f3f5] dark:bg-gray-800 dark:text-white p-1 h-8  "
      >
        <option value="default" selected>
          Default
        </option>
        <option value="1">Price {`(High > low)`}</option>
        <option value="0">Price {`(Low < high)`}</option>
      </select>
    </>
  );
};

export default SortByPrice;
