import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import Footer from '../components/Footer';


test("On render, check that Footer is rendered correctly", () => {
    const { getByTestId } = render(<Footer />);
    const { getByText } = within(screen.getByTestId('footer'))
    expect(getByText("Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.")).toBeInTheDocument()
});
