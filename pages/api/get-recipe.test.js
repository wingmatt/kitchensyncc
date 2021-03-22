import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import GetRecipe from '../../components/GetRecipe'
import '@testing-library/jest-dom/extend-expect'

test('Entering a recipe URL returns a 200 response', async ()=> {
  render(<GetRecipe />)
  fireEvent.click(screen.getByText('Clip Recipe'))
})