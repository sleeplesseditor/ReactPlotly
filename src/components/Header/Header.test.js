import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the Header component', () => {
    const title = 'React CryptoCoin Plotly';
    render(<Header />);
    expect(screen.getByText(title)).toBeInTheDocument();
});
