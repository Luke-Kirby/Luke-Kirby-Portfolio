import React from "react";
import { isTemplateSpan } from "typescript";
import "./MenuList.scss";

type ListItem = {
  label: string;
  path: string;
  icon: string;
};

type Props = {
  items: ListItem[];
};

function MenuList(props: Props) {
  let iconAlt;
  iconAlt = {};

  return (
    <div className="MenuListDiv">
      {props.items.map((item) => {
        return (
          <a className="MenuLink" href={item.path}>
            <img
              className="MenuLinkImg"
              src={`/images/icons/${item.icon}Icon.png`}
            />

            <p className="MenuLinkLabel">{item.label}</p>
          </a>
        );
      })}
    </div>
  );
}

export default MenuList;
