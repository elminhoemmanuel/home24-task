import React, { useState } from 'react'
import { Category } from '../../utils/types/productList';
import ArticleCard from "../ArticleCard";
import Pagination from '../Pagination';

type ArticleListProps = {
    categories: Category[];
    toggleSidebar: () => void;
}

const ArticleList = ({ categories, toggleSidebar }: ArticleListProps) => {

    const incrFactor = 20;
    const totalArticles = 50;
    const [range, setRange] = useState(20);
    const viewMore = ():void =>setRange(prev=>prev + incrFactor);
    const viewLess = ():void =>setRange(prev=>prev - incrFactor);

    const renderArticles = (categories: Category[]) => {
        const articles = categories?.map((category) => {
            return category?.categoryArticles.articles?.filter((article, x)=> x < range).map((article) => {
                return <ArticleCard key={article.name} article={article} />;
            });
        });
        return articles
    }

    return (
        <div className='pl-6 md:pl-72 relative pt-3 pr-6 md:pr-8'>
            {categories?.length ? (
                <div className='flex items-center mb-5'>
                    <button onClick={() => toggleSidebar()} className='block md:hidden mr-3 text-black hover:text-hmred'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <h1 data-testid='header' className='text-2xl font-bold'>
                        {categories[0]?.name}
                        <small data-testid='article-count'> ({categories[0]?.articleCount})</small>
                    </h1>
                </div>
            ) : (
                'Loading...'
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-6'>{renderArticles(categories)}</div>
            
            { categories?.length > 0  && <Pagination totalArticles={totalArticles} range={range} viewLess={viewLess} viewMore={viewMore} /> }
        </div>
    )
}

export default ArticleList