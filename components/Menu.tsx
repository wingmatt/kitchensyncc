import MenuLink from "../components/MenuLink"

export default function Menu() {
  return (
    <nav>
      <MenuLink href="/pantry" label="Pantry" />
      <MenuLink href="/list" label="Shopping List" />
      <MenuLink href="/recipes" label="Recipes" />
    </nav>
  )
}