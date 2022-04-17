import React from "react";
import { isTemplateSpan } from "typescript";

type ListItem = {
  label: string;
  path: string;
  icon: string;
};

type Props = {
  items: ListItem[];
};

function MenuList(props: Props) {
  return (
    <div>
      {/* Label */}
      <p
        style={{
          fontFamily: "revert",
          color: "rgb(255, 255, 255)",
          fontSize: "30px",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        {props.items[0]}
      </p>

      {/* Icon */}
      {/* <img
      alt="Profile Picture"
      src="/images/icon/houseIcon.jpeg"

    /> */}
    </div>
  );
}

export default MenuList;
