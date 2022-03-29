import React from 'react'
import { Category } from '../../utils/types/productList'

type MobileSidebarProps = {
    categories: Category[];
    toggleSidebar:()=>void;
}

const Sidebar = ({ categories, toggleSidebar }: MobileSidebarProps) => {
    return (
        <div className='fixed md:hidden md:absolute top-0 left-0 md:top-20 w-72 z-20 pl-6 md:pl-8 pr-3 bg-white h-screen shadow md:shadow-none'>
            <div className='pt-6 md:pt-0 pb-6 flex items-center justify-between'>
                <h3 data-testid="header" className='font-bold text-2xl'>Kategorien</h3>

                <button onClick={()=>toggleSidebar()} className='block md:hidden text-black hover:text-hmred'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {categories?.length ? (
                <ul data-testid="list" className=''>
                    {categories[0]?.childrenCategories?.map(({ name, urlPath }) => {
                        return (
                            <li className='py-3 cursor-pointer text-sm hover:text-hmred' key={name}>
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