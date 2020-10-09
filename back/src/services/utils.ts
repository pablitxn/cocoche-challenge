export const pagination = (data: Array<any>) => {
  /** Definitions */
  const rowsPerPage = 8;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  let pages = []
  /** Make pagination */
  for(let i = 0; i < totalPages; i =+ rowsPerPage) {
    let page = data.slice(i, i + rowsPerPage)
    pages.push({...page})
  };
  /** Format data response */
  const response = {
    rowsPerPage,
    totalItems,
    totalPages,
    data: pages
  }

  return response
}