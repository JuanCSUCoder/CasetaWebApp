import Image, { StaticImageData } from "next/image";
import styles from "./FeatureIcon.module.css";

export default function FeatureIcon({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
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
  );
}
