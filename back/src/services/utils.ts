export const pagination = (data: Array<any>, page: string) => {
  /** Definitions */
  const rowsPerPage = 8;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  let pages = [];
  /** Make pagination */
  for(let i = 0; i < totalPages; i++) {
    if(i + rowsPerPage <= totalItems ){
      let page = data.slice(i, i + rowsPerPage);
      pages.push({
        totalItems,
        rowsPerPage,
        totalPages,
        currentPage: i + 1,
        data: {...page}
      })
    } else {
      let $i = i * rowsPerPage - totalItems
      let page = data.slice($i, totalItems);
        pages.push({
          totalItems,
          rowsPerPage,
          totalPages,
          currentPage: i + 1,
          data: {...page}
        })
    }
};
  /** Filter by page */
  const pageFiltered = pages.filter($page => $page.currentPage === +page)

  return pageFiltered
}