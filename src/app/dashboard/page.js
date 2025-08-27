// app/dashboard/page.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>স্বাগতম, {session.user.name}</h1>
      <p>এটি একটি সুরক্ষিত পেজ।</p>
    </div>
  );
}