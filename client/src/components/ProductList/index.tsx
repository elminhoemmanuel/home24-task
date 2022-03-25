import React, { useState, useEffect } from 'react';

import { Category } from '../../utils/types/productList';
import classes from './ProductList.module.css';
import { getCategory } from "../../utils/services/ProductList";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ArticleList from '../ArticleList';
import Footer from '../Footer';

const ArticleListPage = () =>{

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () =>{
        try {
            const response:any = await getCategory();
            setCategories(response?.data.data.categories);
        } catch (error) {
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className={classes.page}>

            <Navbar />

            <Sidebar categories={categories} />

            <ArticleList categories={categories} />

            <Footer />
            
        </div>
    );
    
}

export default ArticleListPage;
