import { FC } from "react";
import Image from "next/image";

import styles from "./SampleListing.module.css";
import Button from "@/components/atoms/Button";

const itmes = [
  {
    name: "Retail OM",
    desc: "strip centers, street retail, vehicle related, and more.",
    src: "/images/item1.png",
  },
  {
    name: "Multi-Family OM",
    desc: "garden, low-rise, mid-rise, high-rise.",
    src: "/images/item2.png",
  },
  {
    name: "Office OM",
    desc: "all classes of office buildings, loft/creative, medical.",
    src: "/images/item3.png",
  },
];

const SampleListing: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.heading}>Sample OMs created with our platform</p>
        <div className={styles.items}>
          {itmes.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={357}
                  height={276}
                ></Image>
                <div className={styles.detail}>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                  <Button color="primary">View Sample Template</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SampleListing;
