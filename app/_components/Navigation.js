import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl ">
      <ul className="flex items-center space-x-10">
        <li>
          <a className="text-xl font-bold" href="#about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
