import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('App', () => {
  it('SHOULD display the application layout', () => {
    render(<App />)
    const headline = screen.getByText(/Webpack, React, TypeScript Template/i)
    const button = screen.getByText(/count is 0/i)
    expect(headline).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('SHOULD increment count on button click', async () => {
    render(<App />)
    const button = screen.getByText(/count is 0/i)
    await userEvent.click(button)
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
  })
})
