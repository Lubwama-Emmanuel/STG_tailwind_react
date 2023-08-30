import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    item: "Home",
    link: "/",
  },
  {
    id: 2,
    item: "Services",
    link: "/services",
  },
  {
    id: 3,
    item: "About",
    link: "/about",
  },
  {
    id: 4,
    item: "Careers",
    link: "/careers",
  },
  {
    id: 5,
    item: "Contact",
    link: "/contact",
  },
];

// Separator component
export default function Links({ styles }) {
  return (
    <ul className={styles}>
      {links.map((el) => (
        <Link el={el} key={el.id} />
      ))}
    </ul>
  );
}

function Link({ el }) {
  return (
    <li className="mb-1 last:mr-0 sm:mr-7">
      <NavLink to={el.link}>{el.item}</NavLink>
    </li>
  );
}
