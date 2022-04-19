import React from "react";
import Card from "./Card";
import Button from "./UI/Button";
import Radio from "./UI/Radio";
import Text from "./UI/Text";
export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section-container">
          <Text variant={"h1"}>Working with GET reguest</Text>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Button>Show more</Button>
        </div>
      </div>
    </section>
  );
}
