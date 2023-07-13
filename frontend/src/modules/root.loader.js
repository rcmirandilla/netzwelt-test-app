import { redirect } from "react-router-dom";

export default async function rootLoader() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return redirect("/accounts/login");
  }

  return user;
}
