import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
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
  );
};
