import React from 'react';

import { Article } from '../../utils/types/productList';
import { formatter } from "../../utils/helpers/format";
import Pribtn from '../PriBtn';

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div className='rounded border border-hmash hover:border-hmred p-4 cursor-pointer text-sm'>
            <div className='mb-3'><img className='h-52 md:h-48 w-full' src={article.images[0].path} alt="product image" /></div>
            <p data-testid="product-name">{article.name}</p>
            <p className='font-bold my-2'>{formatter.format(article.prices.regular.value / 100)}</p>
            <div className='mt-3 mb-2'>
                <Pribtn text="Add to cart" addStyle='block w-full' />
            </div>
        </div>
    )
};

export default ArticleCard