import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuLink(props) {
  const router = useRouter();

  const isActiveLink = router.pathname == props.href;
  return (
    <Link href={props.href}>
      <a className={`menu-link ${isActiveLink ? "active" : ""}`}>
        {props.label}
      </a>
    </Link>
  );
}
