import Button from "@/components/Button";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Success() {
  return (
    <>
      <h1
        className={roboto.className}
        style={{
          color: "white",
        }}
      >
        Register Successfull. Please check your inbox.
      </h1>
      <Button
        value="Back to Home"
        link="/"
        style={{
          width: "fit-content",
          marginLeft: 0,
        }}
      />
    </>
  );
}
