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
            <ul className="p-4 list-none flex gap-x-3">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <main className="grow">
            <Outlet />
          </main>
          <footer className="bg-cyan-800 text-white p-4">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      );
    },
  },
);
