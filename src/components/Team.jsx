import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./UI/Button";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
import axios from "axios";
import Tooltip from "./UI/Tooltip";
export default function Team() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [moreButton, setMoreButton] = useState(true);
  function fetchData(page) {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((response) => {
        setData(
          Array.isArray(data)
            ? [...data, ...response.data.users]
            : response.data.users
        );
        if (maxPage !== response.data.total_pages) {
          setMaxPage(response.data.total_pages);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section-container">
          <Text variant={"h1"}>Working with GET reguest</Text>
          <div className="card-container">
            {data?.map((el) => {
              return <Card data={el} />;
            })}
          </div>
          {moreButton ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (maxPage > page) {
                  setPage(page + 1);
                  if (maxPage === page + 1) {
                    setMoreButton(false);
                  }
                }
              }}
            >
              Show more
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
