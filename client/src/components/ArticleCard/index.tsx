import React from 'react';

import { Article } from '../../utils/types/productList';
import { formatter } from "../../utils/helpers/format";
import classes from './ArticleCard.module.css';

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div className={classes.article}>
            <img src={article.images[0].path} />
            <div>{article.name}</div>
            <div>{formatter.format(article.prices.regular.value / 100)}</div>
            <section role="button">Add to cart</section>
        </div>
    )
};

export default ArticleCard