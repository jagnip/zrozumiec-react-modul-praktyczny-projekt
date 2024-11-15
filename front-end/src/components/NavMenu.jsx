const routes = [
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Visuals",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Say hello",
    href: "#",
  },
];

export function NavMenu() {
  return (
    <ul className="flex gap-5 text-sm lg:flex lg:items-center">
      {routes.map(({ href, title }) => (
        <li>
          <a href={href}>{title}</a>
        </li>
      ))}
    </ul>
  );
}
