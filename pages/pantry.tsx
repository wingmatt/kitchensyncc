import Layout from '../components/Layout'
import PantryItem from '../components/PantryItem'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ul className="content-list">
        <PantryItem quantity="1" unit="cup" ingredient="sugar" status="ok"/>
        <PantryItem quantity="1" unit="cup" ingredient="sour cream" status="warning"/>
        <PantryItem quantity="1" unit="cup" ingredient="Saffron" status="critical"/>
        <PantryItem quantity="1" unit="cup" ingredient="Salt"/>
      </ul>
    </Layout>
  )
}