import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDataContext } from "./context/DataContext";
import Button from "./UI/Button";
import Text from "./UI/Text";
export default function Team() {
  const [moreButton, setMoreButton] = useState(true);
  const { fetchData, data, setPage, page, lastPage } = useDataContext();
  useEffect(() => {
    fetchData(page);
  }, []);

  return (
    <section className="team-section" id="user">
      <div className="container">
        <div className="team-section-container">
          <Text variant={"h1"}>Working with GET reguest</Text>
          <div className="card-container">
            {data?.map((el, id) => {
              return <Card key={id} data={el} />;
            })}
          </div>
          {moreButton ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (lastPage >= page) {
                  const next = page + 1;
                  fetchData(next);
                  setPage(next);
                }
                if (lastPage < page + 1) {
                  setMoreButton(false);
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
