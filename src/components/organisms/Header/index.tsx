import { FC } from "react";
import Lock from "@/assets/icons/Lock";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";

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
  return (
    <div className={styles.header}>
      <Image
        src={"/images/SellCRE lOGO.png"}
        alt="Logo"
        width={131}
        height={29}
      ></Image>
      <nav className={styles.nav}>
        <ul>
          {links.map((link) => (
            <li key={link.name} className={styles[link.name.toLowerCase()]}>
              <Link href={link.href}>
              {
                link.icon && (
                  <span className={styles.icon}>
                    {link.icon}
                  </span>
                )
              }
              {link.name}</Link>
            </li>
          ))}
          <li>
            <Button color="primary">Try for Free</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
