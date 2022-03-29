import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test("On render, check that logo is present", () => {
    render(<Navbar  />)
    expect(screen.getByTestId("logo"));

})
