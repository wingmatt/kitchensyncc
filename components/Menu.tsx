import Link from "next/link";
import { useRouter } from "next/router";

function MenuLink(props) {
  const isActiveLink = useRouter().pathname == props.href;
  return (
    <Link href={props.href}>
      <a className={`menu-link ${isActiveLink ? "active" : ""}`}>
        {props.label}
      </a>
    </Link>
  );
}

export default function Menu() {
  return (
    <nav>
      <MenuLink href="/pantry" label="Pantry" />
      <MenuLink href="/list" label="Shopping List" />
      <MenuLink href="/recipes" label="Recipes" />
    </nav>
  )
}