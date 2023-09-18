import React from 'react';

import classNames from 'classnames';

import './Pagination.scss';

interface IPagination {
  totalPages: number;
  currentPage: number;
  handlePagination: Function;
};

export const Pagination = ({
  totalPages,
  currentPage,
  handlePagination,
}: IPagination) => {
  
  const paginationConfig = {
    totalPages: totalPages,
    hasPrevPage: currentPage > 1,
    hasNextPage: currentPage !== totalPages,
    prevPage: currentPage - 1,
    nextPage: currentPage + 1,
    page: currentPage,
  };
  
  const getPageList = (currentPage, lastPage) => {
    const leftRange = currentPage - 2;
    const rightRange = currentPage + 3;
    
    const pageList = [1];
    for (let index = leftRange; index < rightRange; index++) {
      if (index > 1 && index < lastPage) {
        pageList.push(index);
      }
    }
    if (lastPage > 1) {
      pageList.push(lastPage);
    }
    
    return pageList;
  }
  
  const generatePagination = (currentPage, totalPages) => {
    const pageList = getPageList(currentPage, totalPages);
    
    let pagination = [];
    let count;
    
    for (const page of pageList) {
      if (count) {
        if ((page - count) !== 1) {
          pagination.push('&hellip;');
        }
      }
      pagination.push(page);
      count = page;
    }
    
    return pagination;
  }
  
  const pagination = generatePagination(currentPage, totalPages);
  return (
    <div className="lp__pagination">
      <ul className="lp__pagination--group">
        {
          paginationConfig.hasPrevPage && (
            <li className="bordered">
              <a href="#" onClick={e => {
                e.persist();
                handlePagination(e, paginationConfig.prevPage)
              }}>
                <span>ᐸ</span>
              </a>
            </li>
          )
        }
        {
          (pagination && pagination.length) && (
            pagination.map((page, i) => (
              <li key={i} className={classNames(paginationConfig.page === page && 'bordered selected')}>
                <a href="#" onClick={e => {
                  e.persist();
                  handlePagination(e, page)}
                }>
                  {
                    page === '&hellip;'
                      ? <span>&hellip;</span>
                      : page
                  }
                </a>
              </li>
            )))
        }
        {
          paginationConfig.hasNextPage && (
            <li className="bordered">
              <a href="#" onClick={e => handlePagination(e, paginationConfig.nextPage)}>
                <span>ᐳ</span>
              </a>
            </li>
          )
        }
    </ul>
  </div>
  );
};
