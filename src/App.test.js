import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);

    const initialMessage = screen.getByText(/Please start adding ingredients!/i);

    expect(initialMessage).toBeInTheDocument();
  });
});