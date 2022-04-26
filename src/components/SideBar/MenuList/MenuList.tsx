import "./MenuList.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface ListItem {
  label: string;
  path: string;
  icon: string;
}

interface Props {
  items: ListItem[];
}

function MenuList(props: Props) {
  const activePage = useLocation();

  return (
    <div className="menu-list-container">
      {props.items.map((item) => {
        return (
          <Link className="menu-link" to={item.path} key={item.label}>
            <img
              className={`menu-link-img${
                activePage.pathname === `/${item.path}`
                  ? " highlighted-img"
                  : ""
              }`}
              src={`/images/icons/${item.icon}Icon.png`}
              alt={item.label}
            />

            <p className="menu-link-label">{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuList;
