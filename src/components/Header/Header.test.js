import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu/Menu';

test('renders the Header component', () => {
    const title = 'React Plotly';
    render(<Menu />);
    expect(screen.getByText(title)).toBeInTheDocument();
});
