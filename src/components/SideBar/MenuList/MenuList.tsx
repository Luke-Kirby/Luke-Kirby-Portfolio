import React from "react";
import { isTemplateSpan } from "typescript";

type Props = {
  items: string[];
};

function MenuList(props: Props) {
  return (
    <div>



      
      <p
           style={{
            fontFamily: "revert",
            color: "rgb(255, 255, 255)",
            fontSize: "50px",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          {props.items[0]}</p>
          <p
           style={{
            fontFamily: "revert",
            color: "rgb(255, 255, 255)",
            fontSize: "50px",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          {props.items[1]}</p>
          <p
           style={{
            fontFamily: "revert",
            color: "rgb(255, 255, 255)",
            fontSize: "50px",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          {props.items[2]}</p>
    </div>
  );
}

export default MenuList;
