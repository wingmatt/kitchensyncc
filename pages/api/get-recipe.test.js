import { render, fireEvent, getByTestId, screen } from '@testing-library/react'
import RecipeSearch from '../../components/RecipeSearch'
import {Recipe} from '../../types'
import '@testing-library/jest-dom/extend-expect'

test('GetRecipe\'s ingredients list starts out undefined', async ()=> {
  // Arrange
  const {container } = render(<RecipeSearch />)
  const recipeData = getByTestId(container, "recipe-search")

  // Act

  // Assert
  expect(recipeData.ingredients).not.toBeDefined()
})

test('Clicking "Clip Recipe" on a url adds an array of ingredients to the state', async ()=> {
  // Arrange
  const {container } = render(<RecipeSearch />)
  const recipeData = getByTestId(container, "recipe-search")
  console.log(recipeData)

  // Act
  fireEvent.click(screen.getByText('Clip Recipe'))

  // Assert
  expect(recipeData.ingredients).toBeDefined()
})