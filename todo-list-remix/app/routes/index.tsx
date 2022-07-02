import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/todolists");
}

const Index = () => {
  return (
    <></>
  );
}

export default Index;
