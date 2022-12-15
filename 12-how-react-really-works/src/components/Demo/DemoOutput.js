import { memo } from "react";
import { MyParagraph } from "./MyParagraph";

export const DemoOutput = memo((props) => {
  console.log("DemoOutput is running");
  return props.show ? <MyParagraph>{props.children}</MyParagraph> : null;
});
