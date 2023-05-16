import Block from "@/components/Block";
import Button from "@/components/Button";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <Block>
      <h1
        className={roboto.className}
        style={{
          color: "white",
        }}
      >
        404: Not Found
      </h1>
      <Button
        value="Back to Home"
        link="/"
        style={{
          width: "fit-content",
          marginLeft: 0,
        }}
      />
    </Block>
  );
}
