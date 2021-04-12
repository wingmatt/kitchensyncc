import Link from "next/link"

export default function Menu() {
  return (
    <nav>
        <Link href="/pantry"><a>Pantry</a></Link>
        <Link href="/list"><a>Shopping List</a></Link>
        <Link href="/recipes"><a>Recipes</a></Link>
      </nav>
  )
}