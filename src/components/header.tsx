
import Link from "next/link";
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function AppHeader() {
  return (
    <Navbar fluid>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        {/* <img src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">มุดผ้าห่ม</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <DarkThemeToggle />
      </NavbarCollapse>
    </Navbar>
  );
}
