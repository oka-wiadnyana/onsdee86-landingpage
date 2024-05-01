const NavButton = ({
  title,
  href,
  isHome,
}: {
  title: string;
  href: string;
  isHome: boolean;
}) => {
  return (
    <li>
      <a className="nav-link page-scroll active" href={href}>
        {title} {isHome ? <span className="sr-only">(current)</span> : ""}
      </a>
    </li>
  );
};

export default NavButton;
