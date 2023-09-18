import React, { useState } from 'react';

import { Pagination } from '../components/Pagination';

export default {
  title: "Pagination",
};

export const pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      totalPages={10}
      currentPage={currentPage}
      handlePagination={(event, page) => setCurrentPage(page)}
    />
  );
};
