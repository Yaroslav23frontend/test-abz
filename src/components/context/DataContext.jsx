import React, { useContext, useState } from "react";
const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}
export default function DataProivider({ children }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [lastPage, setLastPage] = useState(1);
  function fetchData(page) {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then((response) => response.json())
      .then((result) => {
        if (page === 1) {
          console.log(result.users);
          setData(result.users);
        } else if (page <= result.total_pages) {
          setData(
            Array.isArray(data) ? [...data, ...result.users] : result.users
          );
        }
        if (lastPage !== data.total_pages) {
          setLastPage(result.total_pages);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  const value = {
    fetchData,
    page,
    setPage,
    loading,
    setLoading,
    error,
    data,
    lastPage,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
