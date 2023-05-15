import Link from "next/link";
import { CSSProperties } from "react";

export default function Button({
  value,
  submit,
  style,
  className,
  link,
  blank,
}: {
  value: string;
  submit?: boolean;
  style?: CSSProperties;
  className?: string;
  link?: string;
  blank?: boolean;
}) {
  const base_style = {
    backgroundColor: "white",
    fontWeight: "bold",
    color: "#e72425ff",
    cursor: "pointer",
  };

  return link ? (
    blank ? (
			<a target="_blank" href={link} className={className} style={{
				...base_style,
				...style
			}}>
				{value}
			</a>
    ) : (
      <Link
        href={link as string}
        className={className}
        style={{ ...base_style, ...style }}
      >
        {value}
      </Link>
    )
  ) : (
    <input
      style={{
        ...base_style,
        ...style,
      }}
      className={className}
      type={submit ? "submit" : "button"}
      value={value}
    />
  );
}
