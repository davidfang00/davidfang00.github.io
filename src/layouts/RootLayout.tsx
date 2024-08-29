import { Link, Outlet, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <main>
      <Outlet />
    </main>
  );
}
