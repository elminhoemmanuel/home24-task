import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import ArticleCard from '../components/ArticleCard';

const article = {
    images: [{ path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp" }],
    name: "Premium Komfortmatratze Smood",
    prices: { currency: "EUR", regular: { value: 54999 } },
    variantName: "180 x 200cm"
}


test("On render, check that ArticleCard is rendered with correct Image", () => {
    render(<ArticleCard article={article}/>);

    expect(screen.getByAltText("product image"))

});

test("On render, check that ArticleCard is rendered with correct product name", () => {
    const { getByTestId } = render(<ArticleCard article={article} />);
    const { getByText } = within(screen.getByTestId('product-name'))
    expect(getByText("Premium Komfortmatratze Smood")).toBeInTheDocument()

});

