import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./FeatureIcon.module.css";

interface ImgIcon {
      src: StaticImageData;
      alt: string;
}

interface ComponentIcon {
  children: ReactNode;
}

export default function FeatureIcon(props: ImgIcon | ComponentIcon) {
  let rendered

  if (props.hasOwnProperty("src")) {
    let { src, alt } = props as ImgIcon

    rendered = (
      <div className={styles.holder}>
      <div className={styles.responsive_img}>
        <Image
          src={src}
          alt={alt}
          className={styles.img}
          fill
          sizes="(max-width: 750px) 70px,
            400px"
        />
      </div>
    </div>)
  } else {
    let { children } = props as ComponentIcon;
    rendered = (
      <div className={styles.holder}>
        <div className={styles.responsive_img}>{children}</div>
      </div>
    );
  }

  return rendered
}
