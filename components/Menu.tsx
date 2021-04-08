import Link from "next/link"

export default function Menu() {
  return (
    <nav>
        <Link href="/pantry"><a>Pantry</a></Link>
        <Link href="/pantry"><a>Shopping List</a></Link>
        <Link href="/pantry"><a>Recipes</a></Link>
      </nav>
  )
}