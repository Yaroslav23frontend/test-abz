import React, { useState, useEffect, Suspense } from "react";

import { useDataContext } from "./context/DataContext";
import ModalWindow from "./Modal";
import Spinner from "./Spinner";
import Button from "./UI/Button";
import Text from "./UI/Text";
const Card = React.lazy(() => import("./Card"));
export default function Team() {
  const [moreButton, setMoreButton] = useState(true);
  const {
    fetchData,
    data,
    setPage,
    page,
    lastPage,
    loading,
    setLoading,
    error,
  } = useDataContext();
  //modal
  const [modalVisible, setModalVisible] = useState();
  function modalVisibility(data) {
    setModalVisible(data);
  }
  useEffect(() => {
    fetchData(page);
  }, []);
  useEffect(() => {
    if (error.length !== 0) {
      setModalVisible(true);
    }
  }, [error]);

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
          {loading ? <Spinner /> : ""}
          {moreButton ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (lastPage >= page) {
                  const next = page + 1;
                  fetchData(next);
                  setPage(next);
                  setLoading(true);
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
          <ModalWindow
            visible={modalVisible}
            setModalVisible={modalVisibility}
            errorMassege={[error.message]}
          />
        </div>
      </div>
    </section>
  );
}
