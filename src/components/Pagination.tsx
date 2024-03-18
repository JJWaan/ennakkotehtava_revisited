import { useState } from "react";

import { Pagination as MuiPagination } from "@mui/material";

function Pagination() {
  const [page, setPage] = useState(1);

  return <MuiPagination count={5} page={page} />;
}

export default Pagination;
