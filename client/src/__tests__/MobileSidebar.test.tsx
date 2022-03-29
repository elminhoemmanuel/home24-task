import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import MobileSidebar from '../components/MobileSidebar';

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
                name: "Wohnzimmer",
                urlPath: "kategorie/wohnzimmermoebel/"
            }

        ]

    }
]


test("On render, check that Mobile Sidebar is rendered with correct header", () => {
    const toggleSidebar = ():void =>{}
    const { getByTestId } = render(<MobileSidebar toggleSidebar={toggleSidebar} categories={categories} />);
    const { getByText } = within(screen.getByTestId('header'))
    expect(getByText("Kategorien")).toBeInTheDocument()

});

test("On render, check that Mobile Sidebar list is rendered with correctly", () => {
    const toggleSidebar = ():void =>{}
    const { container } = render(
        <MobileSidebar toggleSidebar={toggleSidebar} categories={categories} />
    );
    expect(container.lastChild).toMatchSnapshot()

});
