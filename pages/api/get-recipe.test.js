import { render, fireEvent, getByTestId, screen } from '@testing-library/react'
import GetRecipe from '../../components/GetRecipe'
import {Recipe} from '../../types'
import '@testing-library/jest-dom/extend-expect'

test('Clicking "Clip Recipe" on a url creates an array of ingredients', async ()=> {
  const {container } = render(<GetRecipe />)
  const recipeData = getByTestId(container, "recipe-search")

  expect(recipeData.ingredients).not.toBeDefined()
})
test('Clicking "Clip Recipe" on a url creates an array of ingredients', async ()=> {
  // Arrange
  const {container } = render(<GetRecipe />)
  const recipeData = getByTestId(container, "recipe-search")

  // Act
  fireEvent.click(screen.getByText('Clip Recipe'))

  // Assert
  expect(recipeData.ingredients).toBeDefined()
})
test('Submitting a URL returns an Ingredients array', async () => {
  render(<GetRecipe />)
})