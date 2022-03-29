import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import ArticleList from '../components/ArticleList';

const categories = [
    {
        name: "Möbel",
        articleCount: 79279,
        categoryArticles: {
            articles: [
                {
                    images: [{ path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp" }],
                    name: "Premium Komfortmatratze Smood",
                    prices: { currency: "EUR", regular: { value: 54999 } },
                    variantName: "180 x 200cm"
                },
                {
                    images: [{ path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp" }],
                    name: "Premium Komfortmatratze Smood",
                    prices: { currency: "EUR", regular: { value: 54999 } },
                    variantName: "180 x 200cm"
                }
            ]
        },
        childrenCategories: [
            {
                name: "Wohnzimmer",
                urlPath: "kategorie/wohnzimmermoebel/"
            },
            {
                name: "Schlafzimmer",
                urlPath: "kategorie/schlafzimmermoebel/"
            }

        ]

    }
]


test("On render, check that ArticleList is rendered with correct header", () => {
    const toggleSidebar = ():void =>{}
    const { getByTestId } = render(<ArticleList toggleSidebar={toggleSidebar} categories={categories} />);
    const { getByText } = within(screen.getByTestId('header'))
    expect(getByText("Möbel")).toBeInTheDocument()

});

