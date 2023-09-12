import { redirect } from "next/navigation";
const ReactLogout = () => {
  return <div>{redirect("/login")}</div>;
};

export default ReactLogout;
