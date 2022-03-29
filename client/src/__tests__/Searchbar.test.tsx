import React from 'react';
import { render, screen } from '@testing-library/react';
import Searchbar from '../components/Searchbar';

test("On render, check that search field is present", () => {
    render(<Searchbar  />)
    expect(screen.getByPlaceholderText('Find products...'));

})
