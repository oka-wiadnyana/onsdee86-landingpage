import React from "react";

interface IDropdown {
  href: string;
  text: string;
}

const NavDropdownButton = ({
  title,
  item,
}: {
  title: string;
  item: IDropdown[] | [];
}) => {
  return (
    <li className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="dropdown01"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdown01">
        {item.map((value, index) => (
          <>
            <a
              key={index}
              className="dropdown-item page-scroll"
              href={value.href}
            >
              {value.text}
            </a>
            <div className="dropdown-divider"></div>
          </>
        ))}
      </div>
    </li>
  );
};

export default NavDropdownButton;
