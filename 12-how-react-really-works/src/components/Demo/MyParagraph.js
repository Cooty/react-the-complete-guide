import { memo } from "react";

export const MyParagraph = memo((props) => {
  console.log("MyParagraph is running");
  return <p>{props.children}</p>;
});
