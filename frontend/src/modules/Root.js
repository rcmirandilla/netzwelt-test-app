import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      This is root <Outlet />
    </div>
  );
}
