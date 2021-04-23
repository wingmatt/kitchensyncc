import Layout from '../components/Layout'
import ShoppingListItem from '../components/ShoppingListItem'
import styles from "../styles/components/ShoppingListItem.module.css";


export default function List(){
  return (
    <Layout title="Shopping List">
      <ul className="content-list">
        <h2 className={styles.category}>Produce</h2>
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" type="shopping" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" type="shopping"/>
      </ul>
      <ul className="content-list">
        <h2 className={styles.category}>Spices</h2>
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" type="shopping" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" type="shopping"/>
      </ul>
      <ul className="content-list">
        <h2 className={styles.category}>Meat</h2>
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" type="shopping" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" type="shopping"/>
      </ul>
      <ul className="content-list">
        <h2 className={styles.category}>Dairy</h2>
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" type="shopping" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" type="shopping"/>
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" type="shopping"/>
      </ul>
    </Layout>
  )
}