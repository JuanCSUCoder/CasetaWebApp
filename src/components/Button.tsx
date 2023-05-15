import { CSSProperties } from "react";

export default function Button({ value, submit, style, className }: { value: string, submit?: boolean, style?: CSSProperties | undefined, className?: string }) {
  return (
    <input
			style={{
        backgroundColor: "white",
        fontWeight: "bold",
        color: "#e72425ff",
				cursor: "pointer",
				...style
			}}
			className={className}
      type={submit ? "submit" : "button"}
      value={value}
    />
  );
}
