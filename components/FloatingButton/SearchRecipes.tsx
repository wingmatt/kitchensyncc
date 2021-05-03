import FloatingButton from './'
import { FiSearch } from 'react-icons/fi'

const searchRecipes = () => {
  
}

export default function SearchRecipes () {
  return (
    <FloatingButton action="searchRecipes" label="Search Recipes" icon={<FiSearch focusable="false"/>} />
  )
}