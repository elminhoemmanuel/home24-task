import React from 'react'

type PaginationProps = {
    totalArticles: number;
    range: number;
    viewMore: () => void;
    viewLess: () => void;
}

const Pagination = ({ totalArticles, range, viewMore, viewLess }:PaginationProps) => {
    return (
        <div className='flex items-center justify-center py-6'>
            {
                range >= totalArticles ?
                    <button data-testid="less-btn" onClick={() => viewLess()} className='block text-hmred'>
                        See Less
                    </button>
                    :
                    <button data-testid="more-btn" onClick={() => viewMore()} className='block text-hmred'>
                        See More
                    </button>
            }
        </div>
    )
}

export default Pagination