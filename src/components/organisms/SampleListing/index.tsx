"use client";

import { FC, useEffect, useState } from "react";
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
                  width={isSmallDevice ? 290 : 357}
                  height={isSmallDevice ? 224 : 276}
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
