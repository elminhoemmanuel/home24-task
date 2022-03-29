import React, { useState, useEffect } from 'react';

import { Category } from '../../utils/types/productList';
import { getCategory } from "../../utils/services/ProductList";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import MobileSidebar from '../MobileSidebar';
import ArticleList from '../ArticleList';

const ArticleListPage = () =>{

    const [categories, setCategories] = useState<Category[]>([]);
    const [showSidebar, setShowSidebar] = useState(false);

    const getCategories = async () =>{
        try {
            const response:any = await getCategory();
            setCategories(response?.data.data.categories);
        } catch (error) {
        }
    }

    const toggleSidebar = ():void =>{
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="relative">
            <Navbar />

            { showSidebar && <MobileSidebar toggleSidebar={toggleSidebar} categories={categories} /> }
            
            <Sidebar categories={categories} />

            <ArticleList toggleSidebar={toggleSidebar} categories={categories} />

            <Footer />
            
        </div>
    );
    
}

export default ArticleListPage;
