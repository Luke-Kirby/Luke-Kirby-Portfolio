import React from "react";
import { isTemplateSpan } from "typescript";
import "./MenuList.scss";
import { Link } from "react-router-dom";

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
    <div className="MenuListDiv">
      {props.items.map((item) => {
        return (
          <Link className="MenuLink" to={item.path}>
            <img
              className="MenuLinkImg"
              src={`/images/icons/${item.icon}Icon.png`}
            />

            <p className="MenuLinkLabel">{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuList;
