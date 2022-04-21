import axios from "axios";
import React, { useContext, useState } from "react";
const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}
export default function DataProivider({ children }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  function fetchData(page) {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((result) => {
        if (page === 1) {
          setData(result.data.users);
          if (page !== 1) {
            setPage(1);
          }
        } else if (page <= result.data.total_pages) {
          setData(
            Array.isArray(data)
              ? [...data, ...result.data.users]
              : result.data.users
          );
        }
        if (lastPage !== result.data.total_pages) {
          setLastPage(result.data.total_pages);
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
