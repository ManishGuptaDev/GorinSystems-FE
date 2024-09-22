"use client";

import { FC, useEffect, useState } from "react";
import Lock from "@/assets/icons/Lock";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Menu from "@/assets/icons/Menu";

const links = [
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "Login",
    href: "/",
    icon: <Lock />,
  },
];

const Header: FC = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <Image
        src={"/images/SellCRE lOGO.png"}
        alt="Logo"
        width={131}
        height={29}
      ></Image>
      {!isSmallDevice && (
        <nav className={styles.nav}>
          <ul>
            {links.map((link) => (
              <li key={link.name} className={styles[link.name.toLowerCase()]}>
                <Link href={link.href}>
                  {link.icon && (
                    <span className={styles.icon}>{link.icon}</span>
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button color="primary">Try for Free</Button>
            </li>
          </ul>
        </nav>
      )}
      {isSmallDevice && (
        <div className={styles.menuButton}>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Header;
