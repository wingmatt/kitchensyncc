import Layout from '../components/Layout'
import ShoppingListItem from '../components/ShoppingListItem'

export default function List(){
  return (
    <Layout title="Shopping List">
      <ul className="content-list">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" type="shopping" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" type="shopping"/>
      </ul>
    </Layout>
  )
}