import React from 'react'
import { Category } from '../../utils/types/productList';
import ArticleCard from "../ArticleCard";
import classes from './ArticleList.module.css';

type ArticleListProps = {
    categories: Category[];
}

const ArticleList = ({ categories }:ArticleListProps) => {

    const renderArticles = ( categories:Category[] ) =>{
        const articles = categories?.map((category) => {
            return category?.categoryArticles.articles?.map((article) => {
                return <ArticleCard key={article.name} article={article} />;
            });
        });
        return articles
    }

    return (
        <div className={classes.content}>
            {categories?.length ? (
                <h1>
                    {categories[0]?.name}
                    <small> ({categories[0]?.articleCount})</small>
                </h1>
            ) : (
                'Loading...'
            )}
            <div className={classes.articles}>{renderArticles(categories)}</div>
        </div>
    )
}

export default ArticleList