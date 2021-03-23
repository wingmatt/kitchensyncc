import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import GetRecipe from '../../components/GetRecipe'
import '@testing-library/jest-dom/extend-expect'

test('Entering a recipe URL returns a 200 response', async ()=> {
  // Arrange
  render(<GetRecipe />)

  // Act
  fireEvent.click(screen.getByText('Clip Recipe'))

  // TODO Assert
    // This conjures and clicks the button, but how can I assert what the response should be?
    // Right now the RecipeJson just gets sent to the console log. That data needs to get into the component somehow. 
    // Probably as state that can be scooted upstream.

    // 
})
test('Submitting a URL returns an Ingredients array', async () => {
  render(<GetRecipe />)
})