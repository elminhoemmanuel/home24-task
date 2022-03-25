import React from 'react'
import { Category } from '../../utils/types/productList'
import classes from './Sidebar.module.css';

type SidebarProps = {
    categories: Category[];
}

const Sidebar = ({ categories }:SidebarProps) => {
    return (
        <div className={classes.sidebar}>
            <h3>Kategorien</h3>
            {categories?.length ? (
                <ul>
                    {categories[0]?.childrenCategories?.map(({ name, urlPath }) => {
                        return (
                            <li key={name}>
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