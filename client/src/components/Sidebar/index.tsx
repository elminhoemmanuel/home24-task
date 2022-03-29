import React from 'react'
import { Category } from '../../utils/types/productList'

type SidebarProps = {
    categories: Category[];
}

const Sidebar = ({ categories }: SidebarProps) => {
    return (
        <div className='fixed hidden md:block md:absolute top-0 left-0 md:top-20 w-72 z-20 pl-6 md:pl-8 pr-3 bg-white h-screen shadow md:shadow-none'>
            <div className='pt-6 md:pt-0 pb-6 flex items-center justify-between'>
                <h3 data-testid="header" className='font-bold text-2xl'>Kategorien</h3>
            </div>

            {categories?.length ? (
                <ul className=''>
                    {categories[0]?.childrenCategories?.map(({ name, urlPath }) => {
                        return (
                            <li data-testid="category-name" className='py-3 cursor-pointer text-sm hover:text-hmred' key={name}>
                                <a href={`/${urlPath}`}>{name}</a>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                'Loading...'
            )}
        </div>
    )
}

export default Sidebar