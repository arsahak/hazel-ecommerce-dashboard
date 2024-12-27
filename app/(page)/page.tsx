import { auth } from "@/auth";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SalesReport from "@/components/dashboard/SalesReport";
import ShopDetialsSection from "@/components/dashboard/ShopDetialsSection";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }



  return (
    <div className="bg-[#f8f8f8] mx-10 ">
      <DashboardHeader />
      <ShopDetialsSection />
      <SalesReport />
    </div>
  );
};

export default page;
