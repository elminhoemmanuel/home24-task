import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';


test("On render, check that Pagination see more button is rendered correctly", () => {
    const range = 20;
    const totalArticles = 50;
    const viewMore = (): void => { };
    const viewLess = (): void => { };

    const { getByTestId } = render(<Pagination range={range} totalArticles={totalArticles} viewLess={viewLess} viewMore={viewMore} />);

    if (range < totalArticles) {
        expect(screen.getByTestId("more-btn"))
    }
});

test("On render, check that Pagination see less button is rendered correctly", () => {
    const range = 60;
    const totalArticles = 50;
    const viewMore = (): void => { };
    const viewLess = (): void => { };

    const { getByTestId } = render(<Pagination range={range} totalArticles={totalArticles} viewLess={viewLess} viewMore={viewMore} />);

    if (range >= totalArticles) {
        expect(screen.getByTestId("less-btn"))
    }
});
