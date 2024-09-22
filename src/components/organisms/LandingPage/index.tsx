import Banner from "@/components/molecules/Banner";
import { FC } from "react";
import styles from "./LandingPage.module.css";
import Retail from "@/assets/icons/Retail";
import Family from "@/assets/icons/Family";
import Building from "@/assets/icons/Building";
import WareHouse from "@/assets/icons/WareHouse";
import Hotel from "@/assets/icons/Hotel";
import Land from "@/assets/icons/Land";
import SampleListing from "../SampleListing";

const itmes = [
  {
    name: "Retail",
    icon: <Retail />,
  },
  {
    name: "Multi-family",
    icon: <Family />,
  },
  {
    name: "Office",
    icon: <Building />,
  },
  {
    name: "Industrial",
    icon: <WareHouse />,
  },
  {
    name: "Hotel",
    icon: <Hotel />,
  },
  {
    name: "Land",
    icon: <Land />,
  },
];

const LandingPage: FC = () => {
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.heading}>Create OMs and Ads For</p>
          <p className={styles.subheading}>
            Various Real Estate Property Types
          </p>
        </div>
        <div className={styles.bottom}>
          {itmes.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <SampleListing />
    </div>
  );
};

export default LandingPage;
