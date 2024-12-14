import { auth } from "@/auth";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ShopDetialsSection from "@/components/dashboard/ShopDetialsSection";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  console.log("check value of login", session);
  return (
    <div>
      <DashboardHeader />
      <ShopDetialsSection />
      {/* <SalesReport /> */}
    </div>
  );
};

export default page;
