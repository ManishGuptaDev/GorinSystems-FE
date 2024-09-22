import { FC } from "react";
import styles from "./Banner.module.css";
import Button from "@/components/atoms/Button";
import Video from "@/assets/icons/Video";
import Image from "next/image";
import RightArrow from "@/assets/icons/RightArrow";

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.title}>
          <span className={styles.highlight}>Sell CRE Faster</span> with OMs &
          Ads created in <span className={styles.highlight}>minutes</span>
        </p>
        <p className={styles.description}>
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </p>
        <div className={styles.ctas}>
          <div className={styles.btnwrapper}>
            <Button color="primary" icon={<RightArrow />} customStyles={styles.btn} >Try for free</Button>
          </div>
          <div className={styles.video}>
            <Video />
            <span className={styles.text}>Watch Demo</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/hero image.png"}
            alt="Hero image"
            layout="fill" // This makes the image fill its parent
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
