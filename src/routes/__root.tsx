import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => {
      return (
        <div className="flex flex-col min-h-[100vh]">
          <nav className="bg-cyan-800 text-white">
            <ul className="p-5 list-none flex gap-x-4">
              <li>
                <Link
                  to="/dashboard"
                  className="text-[15px]"
                  activeProps={{ className: "text-orange-300" }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="text-[15px]"
                  activeProps={{ className: "text-orange-300" }}
                >
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <main className="grow">
            <Outlet />
          </main>
          <footer className="bg-cyan-800 text-white p-5">
            <p className="text-[15px] text-center">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      );
    },
  },
);
