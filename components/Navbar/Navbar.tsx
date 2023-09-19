import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.topNav}>
      <nav className="hidden md:flex">
        <ul className="flex md:flex-row gap-6 px-4">
          <li>
            <Link href="/" passHref className="relative link border-bottom">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              passHref
              className="relative link border-bottom opacity-[0.5]"
            >
              Find a doctor
            </Link>
          </li>
          <li>
            <Link
              href="/"
              passHref
              className="relative link border-bottom opacity-[0.5]"
            >
              Apps
            </Link>
          </li>

          <li>
            <Link
              href="/"
              passHref
              className="relative link border-bottom opacity-[0.5]"
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              href="/"
              passHref
              className="relative link border-bottom opacity-[0.5]"
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="main" className="flex md:hidden">
        <ul
          id="navbar-menu"
          className={`flex items-center justify-between gap-8 mt-8`}
        >
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Find a doctor
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Apps
            </Link>
          </li>

          <li>
            <Link href="/" passHref>
              Testimonials
            </Link>
          </li>

          <li>
            <Link href="/" passHref>
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
