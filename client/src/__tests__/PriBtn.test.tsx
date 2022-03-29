import React from 'react';
import { render } from '@testing-library/react';
import PriBtn from '../components/PriBtn';


test("On render, check that Primary button list is rendered correctly", () => {
    const { container } = render(
        <PriBtn text="Add to cart" />
    );
    expect(container).toMatchSnapshot()

});
