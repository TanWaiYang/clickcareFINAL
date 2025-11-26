import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
  const user = await currentUser();

  // If Not Logged In, Redirect None
  if (!user) redirect("/");

  // To Get The Admin Email
  const adminEmail = process.env.ADMIN_EMAIL;

  // To Get The Current Logged In Users email
  const userEmail = user.emailAddresses[0]?.emailAddress;

  if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

  return <AdminDashboardClient />;
}

export default AdminPage;
